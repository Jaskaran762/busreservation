export class Booking{
    constructor(
        public bookingId:number,
        public busName: String,
        public busId: number,
        public from: String,
        public to: String,
        public bookingDate: Date,
        public bookingtime:String,
        public noOfBookings:number
    ){}
}