import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TripSearchComponent } from './trip-search/trip-search.component';
import { FlightsComponent } from './flights/flights.component';
import { TripSearchControllerComponent } from './trip-search/trip-search-controller/trip-search-controller.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'search',
    component: TripSearchControllerComponent
  },
  {
    path: 'booking/flights',
    component: FlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
