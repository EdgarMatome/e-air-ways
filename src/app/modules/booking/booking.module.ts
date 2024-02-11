import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookComponent } from './book/book.component';
import { FlightsComponent } from './flights/flights.component';
import { TripSearchComponent } from './trip-search/trip-search.component';


@NgModule({
  declarations: [
    BookComponent,
    FlightsComponent,
    TripSearchComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
