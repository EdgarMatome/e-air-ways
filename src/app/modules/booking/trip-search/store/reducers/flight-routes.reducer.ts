import { Action, createReducer, on } from '@ngrx/store';
import { TravelRoutes } from '../../models/routes';
import { FlightRoutesActions } from '../actions';

export const stateKey = 'flightRoutes';

export interface State {
  travelRoutes: TravelRoutes[];
  flights: any;
}

export const initialState: State = {
  travelRoutes: [],
  flights: []
};

export const flightRoutesReducer = createReducer(initialState,
  on(
    FlightRoutesActions.loadRoutesSuccess,
    (state, { travelRoutes }): State => ({ ...state, travelRoutes })
  ),
  on(
    FlightRoutesActions.searchFlightsSuccess,
    (state, { flights }): State => ({ ...state, flights })
  )
)
// export const reducer = (state: State | undefined, action: Action): State => flightRoutesReducer(state, action);
export const reducer = (state: State | undefined, action: Action): State => flightRoutesReducer(state, action);
