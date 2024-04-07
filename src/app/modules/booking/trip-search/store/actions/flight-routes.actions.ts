import { createAction, props } from '@ngrx/store';
import { FlightsSearch, TravelRoutes } from '../../models/routes';

export const loadRoutes = createAction(
  '[Flight-Routes] load travel routes',
);

export const loadRoutesSuccess = createAction(
  '[Flight-Routes] load routes success',
  props<{ travelRoutes: any }>()
);

export const searchFlights = createAction(
  '[Search] Search trip flights',
  props<{ searchData: FlightsSearch }>()
);

export const searchFlightsSuccess = createAction(
  '[Search] trip data loaded from api',
  props<{ tripData: any }>()
);
