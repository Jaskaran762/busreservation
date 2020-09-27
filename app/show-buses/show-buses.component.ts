import { Component, OnInit } from '@angular/core';
import {Bus} from './bus';

@Component({
  selector: 'app-show-buses',
  templateUrl: './show-buses.component.html',
  styleUrls: ['./show-buses.component.css']
})
export class ShowBusesComponent implements OnInit {

  buses = [
    new Bus(1, 'Windstorm', 'CH012', 500, 40, 'available', 'ac'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
