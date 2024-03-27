import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightRoutesReducer as Reducer } from '../reducers'

type State = Reducer.State;

export const selectState = createFeatureSelector<Reducer.State>('store');


// export const selectFlightRoutes = createSelector(selectState, (state: State) => state.travelRoutes);
export const selectFlightRoutes = createSelector(
  selectState,
  (state: State) => {
    console.log("Current state:", state); // Add console.log statement
    return state;
  }
);
