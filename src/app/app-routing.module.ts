import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'payment',
    loadChildren: () => import('./modules/payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'booking',
    loadChildren: () => import('./modules/booking/booking.module').then((m) => m.BookingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
