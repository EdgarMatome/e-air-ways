import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { TravellerInformationComponent } from './traveller-information/traveller-information.component';
import { TravelServicesComponent } from './travel-services/travel-services.component';


@NgModule({
  declarations: [
    PaymentSummaryComponent,
    TravellerInformationComponent,
    TravelServicesComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
