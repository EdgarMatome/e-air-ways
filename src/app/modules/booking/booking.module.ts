import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookComponent } from './book/book.component';
import { FlightsComponent } from './flights/flights.component';
import { TripSearchComponent } from './trip-search/trip-search.component';
import { TripSearchControllerComponent } from './trip-search/trip-search-controller/trip-search-controller.component';
import { FlightSearchComponent } from './trip-search/flight-search/flight-search.component';
import { TripSearchSummaryComponent } from './trip-search/trip-search-summary/trip-search-summary.component';


@NgModule({
  declarations: [
    BookComponent,
    FlightsComponent,
    TripSearchComponent,
    TripSearchControllerComponent,
    FlightSearchComponent,
    TripSearchSummaryComponent,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
