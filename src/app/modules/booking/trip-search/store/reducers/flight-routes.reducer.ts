import { Action, createReducer, on } from '@ngrx/store';
import { TravelRoutes } from '../../models/routes';
import { FlightRoutesActions } from '../actions';

export const stateKey = 'flightRoutes';

export interface State {
  travelRoutes: TravelRoutes[];
  tripData: any;
}

export const initialState: State = {
  travelRoutes: [],
  tripData: []
};

export const flightRoutesReducer = createReducer(initialState,
  on(
    FlightRoutesActions.loadRoutesSuccess,
    (state, { travelRoutes }): State => ({ ...state, travelRoutes })
  ),
  on(
    FlightRoutesActions.searchFlightsSuccess,
    (state, { tripData }): State => ({ ...state, tripData })
  )
)
// export const reducer = (state: State | undefined, action: Action): State => flightRoutesReducer(state, action);
export const reducer = (state: State | undefined, action: Action): State => flightRoutesReducer(state, action);
