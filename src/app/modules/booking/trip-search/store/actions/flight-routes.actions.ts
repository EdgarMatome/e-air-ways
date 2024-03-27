import { createAction, props } from '@ngrx/store';
import { TravelRoutes } from '../../models/routes';

export const loadRoutes = createAction(
  '[Flight-Routes] load travel routes',
)

export const loadRoutesSuccess = createAction(
  '[Flight-Routes] load routes success',
  props<{ travelRoutes: TravelRoutes[] }>()
)
