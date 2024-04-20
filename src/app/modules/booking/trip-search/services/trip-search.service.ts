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

  // getRandomTime(): Date {
  //   const hours = Math.floor(Math.random() * 22) + 5; // Random hours between 5 and 22
  //   const minutes = Math.floor(Math.random() * 60); // Random minutes between 0 and 59

  //   const time = new Date();
  //   time.setHours(hours, minutes, 0, 0);

  //   return time;
  // }

  getRandomTime(): Date {
    const hours = Math.floor(Math.random() * 18) + 5;
    let minutes = Math.floor(Math.random() * 60);

    // Round off minutes to the nearest 15, 30, or 59
    if (minutes <= 7.5) {
      minutes = 0;
    } else if (minutes <= 22.5) {
      minutes = 15;
    } else if (minutes <= 37.5) {
      minutes = 30;
    } else if (minutes <= 52.5) {
      minutes = 45;
    } else {
      minutes = 59;
    }

    const time = new Date();
    time.setHours(hours, minutes, 0, 0);

    return time;
  }

  // Function to check if departure date is close to today's date
  isDepartureCloseToToday(departureDateString: string, thresholdDays: number): boolean {
    // Parse the departure date string into a Date object
    const departureDate = new Date(departureDateString);

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

    // Calculate the difference in milliseconds between departure date and today's date
    const timeDifferenceMs = departureDate.getTime() - today.getTime();

    // Convert milliseconds to days
    const differenceInDays = Math.abs(Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24)));

    // Check if the difference in days is within the threshold
    return differenceInDays <= thresholdDays;
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
      arrivalDateTime.setHours(departureDateTime.getHours() + 2);
      arrivalDateTime.setMinutes(departureDateTime.getMinutes()) // Add 5 hours to departure time for arrival time
      // console.error('wwwwwwwwwwwwwwww', departureDateTime.getMinutes())
      const flight: Flights = {
        carrierCode: "FA",
        flightNumber: (100 + i).toString(),
        departureDateTime: departureDateTime.toISOString(),
        arrivalDateTime: arrivalDateTime.toISOString(),
        price: 1500 + i * 120, // Just an example price increment
        seatAvailability: "Available"
      };

      // Example usage
      const departureDateString = "2024-04-21T08:59:00.000Z";
      const thresholdDays = 3; // Define your threshold here

      const isClose = this.isDepartureCloseToToday(flight.departureDateTime, thresholdDays);
      if (isClose) {
        flight.seatAvailability = 'Prices goes up soon';
      }

      // this.isDepartureCloseToToday(flight.departureDateTime, 3);

      departureFlights.push(flight);
    }
    console.log('Flights ==>', departureFlights);
    // Return departure flights as an observable
    return of({ departureFlights });
  }








}
