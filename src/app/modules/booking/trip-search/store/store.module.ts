import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreFeatureModule, StoreModule, StoreRootModule } from '@ngrx/store';
import { EffectsFeatureModule, EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { FlightRoutesReducer, flightRoutesReducer } from './reducers';
import { flightRoutesEffects } from './effects';
import { FlightRoutesEffects } from './effects/flight-routes.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    HttpClientModule,
    StoreRootModule,
    EffectsRootModule,
    StoreFeatureModule,
    StoreModule.forFeature('store', flightRoutesReducer),
    EffectsModule.forFeature([FlightRoutesEffects]),
    EffectsFeatureModule,
  ]
})
export class TripSearchStoreModule {
  static forRoot(): ModuleWithProviders<TripSearchStoreModule> {
    return {
      ngModule: TripSearchStoreModule,
      providers: []
    }
  }
}
