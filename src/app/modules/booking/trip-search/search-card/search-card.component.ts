import { Component, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FlightRoutesSelectors } from '../store/selectors';
import { map } from 'rxjs/operators';
import { TravelRoutes } from '../models/routes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightRoutesActions } from '../store/actions';
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  flightRoutes$ = this._store.pipe(select(FlightRoutesSelectors.selectFlightRoutes));

  // TODO: FIX TYPE ANY
  depatures: any[] = [];
  locations: TravelRoutes[] = [];
  destinations: any[] = [];
  passengerQt: number[] = [1, 2, 3, 4, 5, 6]
  classLevel: string[] = ['Economy', 'First Class', 'Business', 'Premium']
  passengerPlaceholder = 'Passengers'
  classLevelPlHolder = 'Class'
  depature = 'Depature Airport'
  destination = 'Arrival Airport'
  selectedTravelType: string = 'return';
  travelType: string[] = ['Return', 'One-Way', 'Multi-Way'];
  today = new Date();

  selectedRadio = 'return'
  isOneWayTrip = false;
  searchForm!: FormGroup;
  // tripType = 'oneway'
  // dstinations: any = ['Cape Town Int', 'Durban Int', 'OR Tambo Int']


  constructor(
    private _elementRef: ElementRef,
    protected _router: Router,
    protected _store: Store,
  ) { }

  ngOnInit(): void {

    this.flightRoutes$.pipe(map(flightRoutes => {
      console.warn('Flight Routes', flightRoutes);
      this.locations = flightRoutes;
      this.depatures = flightRoutes;
      this.destinations = flightRoutes;
    })).subscribe();

    if (this._elementRef) {
      this._elementRef.nativeElement.focus();
    }

    this.searchForm = new FormGroup({
      selectedTravelType: new FormControl(),
      departure: new FormControl([{ value: '' }, Validators.required]),
      destination: new FormControl([{ value: '' }, Validators.required]),
      departDate: new FormControl([{ value: '' }, Validators.required]),
      returnDate: new FormControl([{ value: '' }]), // Optional, only if needed
      passengerQuantity: new FormControl([{ value: '' }, Validators.required]),
      classLevel: new FormControl([{ value: '' }])
    });

  }


  setDepature(event: MatSelectChange): void {
    this.locations.filter(x => {
      if (x.location === event.value) {
        this.destinations = x.routes
        console.warn('Depature event Interface', x.routes);
      }
    })
    //   if (event.value === x) {
    //     this.destinations = x.routes
    //   }
  }

  setDestination(event: MatSelectChange): void {
    this.locations.filter(x => {
      if (x.location === event.value) {
        this.depatures = x.routes
        console.warn('Depature event', x);
      }
    })
  }

  selectTrip(event: MatRadioChange): void {
    console.log('Event', event);
    this.selectedTravelType = event.value;
    if (event.value === 'One-Way') {
      this.isOneWayTrip = true;
    } else {
      this.isOneWayTrip = false;
    }
  }

  search(): void {
    this.searchForm.controls['selectedTravelType'].setValue(this.selectedTravelType);
    const formValues = this.searchForm.getRawValue();
    console.warn('Raw Form Values', formValues);
    this._store.dispatch(FlightRoutesActions.searchFlights({ searchData: formValues }));
    this._router.navigate(['/booking/flights']);
  }

}
