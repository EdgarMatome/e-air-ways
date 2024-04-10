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

  constructor(protected _store: Store) { }

  ngOnInit(): void {
    this._store.pipe(select(FlightRoutesSelectors.selectFlights)).subscribe(x => this.flights = x.departureFlights);

    console.log('Data tyo Display ==>', this.flights);
    this._store.pipe(select(FlightRoutesSelectors.selecteSearchData),
      map(action => {
        this.trip = action;
      })).subscribe();

    this.departureDispayString = this.getTripDisplayString(this.trip.departure);
    this.arrivalDisplayString = this.getTripDisplayString(this.trip.destination)

  }




  getTripDisplayString(displayString: string): string | null {
    // const inputString = "O.R Tambo Int. Airport (JNB)";
    const match = displayString.match(/\(([^)]+)\)/);
    const result = match ? match[1] : null;
    return result;
  }

}
