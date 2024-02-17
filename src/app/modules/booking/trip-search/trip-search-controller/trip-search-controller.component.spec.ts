import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSearchControllerComponent } from './trip-search-controller.component';

describe('TripSearchControllerComponent', () => {
  let component: TripSearchControllerComponent;
  let fixture: ComponentFixture<TripSearchControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripSearchControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripSearchControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
