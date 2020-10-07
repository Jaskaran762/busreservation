import { Time } from '@angular/common';
import { Bus } from './show-buses/bus';
export class Route {
    arrivalTime:string;
    departureTime:string;
    stop:string;
    sequence:number;
    bus:Bus;
}
