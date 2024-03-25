import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TravelRoutes } from '../../models/routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripSearchService {
  private flightRoutesDataSubject$ = new Subject<TravelRoutes[]>();
  readonly flightRoutesData$ = this.flightRoutesDataSubject$.asObservable();


  constructor(protected _http: HttpClient) { }

  getFlightRoutes(): Observable<TravelRoutes> {
    return this._http.get<TravelRoutes>('./assets/mocks/depature-data.json');
  }
}
