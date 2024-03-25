import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FlightRoutesActions } from '../store/actions';

@Component({
  selector: 'app-trip-search-controller',
  templateUrl: './trip-search-controller.component.html',
  styleUrls: ['./trip-search-controller.component.scss']
})
export class TripSearchControllerComponent implements OnInit {

  constructor(protected _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(FlightRoutesActions.loadRoutes())
  }

}
