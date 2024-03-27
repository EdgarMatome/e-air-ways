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

  destinations: any = [
    {
      name: 'Cape Town Int',
      date: '12-12-2024',
      available: true
    },
    {
      name: 'Durban Int',
      date: '12-12-2024',
      available: true
    },
    {
      name: 'OR Tambo Int',
      date: '12-12-2024',
      available: true
    },
  ];
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
      console.log('Flight Routes', flightRoutes);
    })).subscribe();

    if (this.elementRef) {
      this.elementRef.nativeElement.focus();
    }
  }

  selectTrip(event: any): void {
    console.log('Event', event)
    if (event.value === 'One-Way') {
      this.isOneWayTrip = true;
    } else {
      this.isOneWayTrip = false;
    }
  }

}
