import { Time } from '@angular/common';
import { Bus } from './bus';
export class Route {
    arrivalTime:string;
    departureTime:string;
    stop:string;
    sequence:number;
    bus:Bus;
}
