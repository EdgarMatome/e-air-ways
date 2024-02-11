import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerInformationComponent } from './traveller-information.component';

describe('TravellerInformationComponent', () => {
  let component: TravellerInformationComponent;
  let fixture: ComponentFixture<TravellerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
