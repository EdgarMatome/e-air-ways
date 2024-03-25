import { ActionReducerMap } from '@ngrx/store';
import * as FlightRoutesReducer from './reducers/flight-routes.reducer'

export {
  FlightRoutesReducer
}
export interface FlightRoutesState {
  [FlightRoutesReducer.stateKey]: FlightRoutesReducer.State;
}

export const initialFlightRoutesState: FlightRoutesState = {
  [FlightRoutesReducer.stateKey]: FlightRoutesReducer.initialState,
}

export const flightRoutesReducer: ActionReducerMap<FlightRoutesState> = {
  [FlightRoutesReducer.stateKey]: FlightRoutesReducer.reducer
}
