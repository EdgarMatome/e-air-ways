import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  depatures: any = [
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
  // dstinations: any = ['Cape Town Int', 'Durban Int', 'OR Tambo Int']

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    if (this.elementRef) {
      this.elementRef.nativeElement.focus();
    }
  }

}
