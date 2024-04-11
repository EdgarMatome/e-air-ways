import { Action, createReducer, on } from '@ngrx/store';
import { FlightsSearch, TravelRoutes } from '../../models/routes';
import { FlightRoutesActions } from '../actions';
import { SearchData } from '../../models/flights';

export const stateKey = 'flightRoutes';

export interface State {
  travelRoutes: TravelRoutes[];
  flights: any;
  searchData: any;
}

export const initialState: State = {
  travelRoutes: [],
  flights: [],
  searchData: {}
};

export const flightRoutesReducer = createReducer(initialState,
  on(
    FlightRoutesActions.loadRoutesSuccess,
    (state, { travelRoutes }): State => ({ ...state, travelRoutes })
  ),
  on(
    FlightRoutesActions.searchFlights,
    (state, { searchData }): State => ({ ...state, searchData })
  ),
  on(
    FlightRoutesActions.searchFlightsSuccess,
    (state, { flights }): State => ({ ...state, flights })
  )
)

export const reducer = (state: State | undefined, action: Action): State => flightRoutesReducer(state, action);
