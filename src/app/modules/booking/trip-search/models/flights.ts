export interface Flights {
  carrierCode: string;
  flightNumber: string;
  departureDateTime: string,
  arrivalDateTime: string,
  price: number
  seatAvailability: string
  duartion?: string;
}

export interface SearchData {
  selectedTravelType: string;
  departure: string;
  destination: string;
  departDate: Date;
  returnDate: Date;
  passengerQuantity: number;
  classLevel: string;
}

export interface Trip {
  departure: string;
  arrival: string;
}
