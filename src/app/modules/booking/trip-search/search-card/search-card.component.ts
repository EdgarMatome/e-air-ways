import { Component, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FlightRoutesSelectors } from '../store/selectors';
import { delay, map } from 'rxjs/operators';
import { TravelRoutes } from '../models/routes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightRoutesActions } from '../store/actions';
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import { NgxSpinnerService } from 'ngx-spinner';

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
  isFormValid = false;
  // tripType = 'oneway'
  // dstinations: any = ['Cape Town Int', 'Durban Int', 'OR Tambo Int']


  constructor(
    protected _spinner: NgxSpinnerService,
    private _elementRef: ElementRef,
    protected _router: Router,
    protected _store: Store,
  ) {
    this.toggleReturnDateValidator();
  }

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
      departure: new FormControl(['', Validators.required]),
      destination: new FormControl(['', Validators.required]),
      departDate: new FormControl(['', Validators.required]),
      returnDate: new FormControl(['']), // Optional, only if needed
      passengerQuantity: new FormControl(['', Validators.required]),
      classLevel: new FormControl([''], Validators.required)
    });

  }

  toggleReturnDateValidator() {
    if (this.isOneWayTrip) {
      this.searchForm?.get('returnDate')?.clearValidators();
    } else {
      this.searchForm?.get('returnDate')?.setValidators(Validators.required);
    }
    this.searchForm?.get('returnDate')?.updateValueAndValidity();
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
      this.toggleReturnDateValidator();
    } else {
      this.isOneWayTrip = false;
    }
  }

  checkFormValidity() {
    console.log('CEHCK VALUE', this.searchForm.get('passengerQuantity'))
    return (
      this.searchForm.get('departure')?.value[0] !== '' &&
      this.searchForm.get('destination')?.value[0] !== '' &&
      this.searchForm.get('departDate')?.valid &&
      (this.isOneWayTrip || this.searchForm.get('returnDate')?.valid) &&
      this.searchForm.get('passengerQuantity')?.value[0] !== '' &&
      this.searchForm.get('classLevel')?.value[0] !== ''
    );
  }
  search(): void {
    this.searchForm.controls['selectedTravelType'].setValue(this.selectedTravelType);
    const formValues = this.searchForm.getRawValue();
    console.warn('Raw Form Values', formValues);
    this._store.dispatch(FlightRoutesActions.searchFlights({ searchData: formValues }));
    this._spinner.show();
    // delay(1500);
    setTimeout(() => {
      this._spinner.hide();
      this._router.navigate(['/booking/flights']);
    }, 1000)
  }

}
