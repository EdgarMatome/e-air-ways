import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Flights, SearchData, Trip } from '../../trip-search/models/flights';
import { FlightRoutesSelectors } from '../../trip-search/store/selectors';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  flights!: Flights[];
  trip!: SearchData;
  departureDispayString!: string | null;
  arrivalDisplayString!: string | null;
  flightDuration!: string;

  constructor(protected _store: Store) { }

  ngOnInit(): void {
    this._store.pipe(select(FlightRoutesSelectors.selectFlights)).subscribe(x => this.flights = x.departureFlights);

    console.log('Data tyo Display ==>', this.flights);
    this._store.pipe(select(FlightRoutesSelectors.selecteSearchData),
      map(action => {
        this.trip = action;
      })).subscribe();

    this.getFlightDuration();
    this.departureDispayString = this.getTripDisplayString(this.trip.departure);
    this.arrivalDisplayString = this.getTripDisplayString(this.trip.destination)
  }

  getFlightDuration() {
    // TODO: SPLIT DURATION FOR EACH ELEMNET
    this.flights.forEach(element => {

      // Define departure time and arrival time strings
      const departureTimeString = new Date(element.departureDateTime);
      const arrivalTimeString = new Date(element.arrivalDateTime);

      // Parse departure and arrival time strings into Date objects
      const departureTime = new Date(departureTimeString);
      const arrivalTime = new Date(arrivalTimeString);

      // Calculate the difference in milliseconds between arrival and departure times
      const durationMs = arrivalTime.getTime() - departureTime.getTime();

      // Convert milliseconds to hours, minutes, and seconds
      const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
      const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
      const durationSeconds = Math.floor((durationMs % (1000 * 60)) / 1000);

      this.flightDuration = `${durationHours} hrs, ${durationMinutes} min`;

      console.log(`Duration: ${durationHours} hours, ${durationMinutes} minutes, ${durationSeconds} seconds`);


    });
  }


  getTripDisplayString(displayString: string): string | null {
    // const inputString = "O.R Tambo Int. Airport (JNB)";
    const match = displayString.match(/\(([^)]+)\)/);
    const result = match ? match[1] : null;
    return result;
  }

}
