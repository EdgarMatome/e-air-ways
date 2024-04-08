import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Flights } from '../../trip-search/models/flights';
import { FlightRoutesSelectors } from '../../trip-search/store/selectors';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  flights!: Flights[];

  constructor(protected _store: Store) { }

  ngOnInit(): void {
    this._store.pipe(select(FlightRoutesSelectors.selectFlights)).subscribe(x => this.flights = x.departureFlights);

    console.log('Data tyo Display ==>', this.flights);
  }

}
