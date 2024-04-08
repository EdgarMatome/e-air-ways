export interface TravelRoutes {
  location: string,
  isAvailable: boolean,
  AirplaneType: string,
  routes: Locations[]
}

export interface Locations {
  loaction: string
}

export interface FlightsSearch {
  selectedTravelType: string;
  departure: string;
  destination?: string;
  departDate: Date;
  returnDate?: Date;
  passengerQuantity: number;
  classLevel: string;
}

