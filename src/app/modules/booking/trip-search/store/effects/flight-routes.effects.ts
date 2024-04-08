import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { FlightRoutesActions } from '../actions';
import { map, mergeMap } from 'rxjs';
import { TripSearchService } from '../../services/trip-search.service';
import { TravelRoutes } from '../../models/routes';


@Injectable()
export class FlightRoutesEffects {
  // protected _name = 'FlightRoutesEffects';

  loadFlightRoutes$ = createEffect(() =>
    this._action$.pipe(
      ofType(FlightRoutesActions.loadRoutes),
      mergeMap((action) =>
        this._tripSearchSvc.getFlightRoutes().pipe(
          map((response) => {
            console.log('ttttt', response)
            return FlightRoutesActions.loadRoutesSuccess({
              travelRoutes: response as TravelRoutes[]
            })
          }
          ),
          // Add error handling
        )
      )
    )
  )

  loadTripFlights$ = createEffect(() =>
    this._action$.pipe(
      ofType(FlightRoutesActions.searchFlights),
      mergeMap((action) => this._tripSearchSvc.getTripFlights(action.searchData).pipe(
        map((response) => {
          console.warn('Woooow flights data', response);
          return FlightRoutesActions.searchFlightsSuccess({ flights: response });
        })
      ))
    )
  )

  constructor(protected _action$: Actions, protected _tripSearchSvc: TripSearchService) {

  }
}
