import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightRoutesReducer as Reducer } from '../reducers'

type State = Reducer.State;

export const selectState = createFeatureSelector<Reducer.State>('store');


export const selectFlightRoutes = createSelector(selectState, (state: State) => state.travelRoutes);
export const selectFlights = createSelector(selectState, (state: State) => state.flights);
export const selecteSearchData = createSelector(selectState, (state: State) => state.searchData);
// export const selectFlightRoutes = createSelector(
//   selectState,
//   (state: State) => {
//     console.log("Current state:", state.travelRoutes); // Add console.log statement
//     return state.travelRoutes;
//   }
// );
