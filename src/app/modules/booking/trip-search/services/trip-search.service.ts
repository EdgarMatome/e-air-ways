import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { FlightsSearch, TravelRoutes } from '../models/routes';
import { HttpClient } from '@angular/common/http';
import { Flights } from '../models/flights';

@Injectable({
  providedIn: 'root'
})
export class TripSearchService {
  private flightRoutesDataSubject$ = new Subject<TravelRoutes[]>();
  readonly flightRoutesData$ = this.flightRoutesDataSubject$.asObservable();


  constructor(protected _http: HttpClient) { }

  getFlightRoutes(): Observable<TravelRoutes[]> {
    return this._http.get<TravelRoutes[]>('./assets/mocks/depature-data.json');
  }

  // getTripFlights(searchData: any): Observable<any> {

  //   this._http.get<any>('./assets/mocks/search-shop.json')
  // }


  // TODO: IF date === todays's date all Departure flights sold out

  getRandomTime(): Date {
    const hours = Math.floor(Math.random() * 22) + 5; // Random hours between 5 and 22
    const minutes = Math.floor(Math.random() * 60); // Random minutes between 0 and 59

    const time = new Date();
    time.setHours(hours, minutes, 0, 0);

    return time;
  }

  getTripFlights(searchData: FlightsSearch): Observable<{ departureFlights: Flights[]; }> {
    const departureDate = searchData.departDate; // Extracting departure date from searchData
    const departureFlights: Flights[] = [];


    // Generating 5 departure flight objects
    for (let i = 1; i <= 5; i++) {
      const departureDateTime = this.getRandomTime();
      // TODO: fIX DATE BUG
      departureDateTime.setDate(departureDate.getDate());
      // departureDateTime.setHours(7 + (i - 1) * 3);  Set departure hour with a gap of 3 hours
      const arrivalDateTime = departureDate;
      arrivalDateTime.setHours(departureDateTime.getHours() + 2); // Add 5 hours to departure time for arrival time

      const flight: Flights = {
        carrierCode: "FA",
        flightNumber: (100 + i).toString(),
        departureDateTime: departureDateTime.toISOString(),
        arrivalDateTime: arrivalDateTime.toISOString(),
        price: 1500 + i * 100, // Just an example price increment
        seatAvailability: "Available"
      };

      departureFlights.push(flight);
    }
    console.log('Flights ==>', departureFlights);
    // Return departure flights as an observable
    return of({ departureFlights });
  }








}
