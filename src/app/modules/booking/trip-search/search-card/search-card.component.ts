import { Component, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FlightRoutesSelectors } from '../store/selectors';
import { map } from 'rxjs/operators';
import { TravelRoutes } from '../models/routes';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  flightRoutes$ = this._store.pipe(select(FlightRoutesSelectors.selectFlightRoutes));
  depatures: TravelRoutes[] = [];

  destinations: any[] = [];
  passengerQt: number[] = [1, 2, 3, 4, 5, 6]
  classLevel: string[] = ['Economy', 'First Class', 'Business', 'Premium']
  passengerPlaceholder = 'Passengers'
  classLevelPlHolder = 'Class'
  depature = 'From'
  destination = 'To'
  selectedTravelType: string = 'Return';
  travelType: string[] = ['Return', 'One-Way', 'Multi-Way'];

  selectedRadio = 'Return'
  isOneWayTrip = false;
  // tripType = 'oneway'
  // dstinations: any = ['Cape Town Int', 'Durban Int', 'OR Tambo Int']


  constructor(private elementRef: ElementRef,
    protected _store: Store) { }

  ngOnInit(): void {

    this.flightRoutes$.pipe(map(flightRoutes => {
      console.warn('Flight Routes', flightRoutes);
      this.depatures = flightRoutes;
      this.destinations = flightRoutes;
    })).subscribe();

    if (this.elementRef) {
      this.elementRef.nativeElement.focus();
    }
  }

  setDepature(event: any): void {
    this.depatures.filter(x => {
      if (x.location === event.value) {
        this.destinations = x.routes
        console.warn('Depature event', x);
      }
    })
    //   if (event.value === x) {
    //     this.destinations = x.routes
    //   }
  }

  setDestination(event: any): void {
    this.destinations.filter(x => {
      if (x.location === event.value) {
        this.depatures = x.routes
        console.warn('Depature event', x);
      }
    })
  }

  // setTripRoute(trip: any){
  //   if(trip === );
  // }

  selectTrip(event: any): void {
    console.log('Event', event)
    if (event.value === 'One-Way') {
      this.isOneWayTrip = true;
    } else {
      this.isOneWayTrip = false;
    }
  }

}
