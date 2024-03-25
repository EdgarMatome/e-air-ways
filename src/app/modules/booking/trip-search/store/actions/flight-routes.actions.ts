import { createAction, props } from '@ngrx/store';
import { TravelRoutes } from '../../../models/routes';

export const loadRoutes = createAction(
  '[Routes] load travel routes',
)

export const loadRoutesSuccess = createAction(
  '[Routes] load routes success',
  props<{ travelRoutes: TravelRoutes }>()
)
