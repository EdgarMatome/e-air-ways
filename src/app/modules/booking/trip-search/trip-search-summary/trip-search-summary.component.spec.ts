import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSearchSummaryComponent } from './trip-search-summary.component';

describe('TripSearchSummaryComponent', () => {
  let component: TripSearchSummaryComponent;
  let fixture: ComponentFixture<TripSearchSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripSearchSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripSearchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
