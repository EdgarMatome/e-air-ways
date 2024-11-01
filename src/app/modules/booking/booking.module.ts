import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookComponent } from './book/book.component';
import { FlightsComponent } from './flights/flights.component';
import { TripSearchComponent } from './trip-search/trip-search.component';
import { TripSearchControllerComponent } from './trip-search/trip-search-controller/trip-search-controller.component';
import { FlightSearchComponent } from './trip-search/flight-search/flight-search.component';
import { TripSearchSummaryComponent } from './trip-search/trip-search-summary/trip-search-summary.component';
import { SearchCardComponent } from './trip-search/search-card/search-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlightCardComponent } from './flights/flight-card/flight-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    BookComponent,
    FlightsComponent,
    TripSearchComponent,
    TripSearchControllerComponent,
    FlightSearchComponent,
    TripSearchSummaryComponent,
    SearchCardComponent,
    FlightCardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BookingRoutingModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
})
export class BookingModule { }
