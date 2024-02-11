import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { TravellerInformationComponent } from './traveller-information/traveller-information.component';
import { TravelServicesComponent } from './travel-services/travel-services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'payment-summary',
    pathMatch: 'full',
  },
  {
    path: 'payment-summary',
    component: PaymentSummaryComponent
  },
  {
    path: 'information',
    component: TravellerInformationComponent
  },
  {
    path: 'services',
    component: TravelServicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
