import { Passenger } from './Passenger';

export class Booking{
    seatsBooked: number;
    dateOfTravel: Date;
    travelRoute: String;
    status: String;
    panCard: String;
    mobileNumber: String;
    customerId: number;
    busId: number;
    paymentId: number;
    passengers: Passenger[];
}  