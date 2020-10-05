import { Component, OnInit } from '@angular/core';
import {ShowBusDto} from './show-bus-dto';

@Component({
  selector: 'app-show-buses',
  templateUrl: './show-buses.component.html',
  styleUrls: ['./show-buses.component.css']
})
export class ShowBusesComponent implements OnInit {

  buses : ShowBusDto[];

  constructor() { }

  ngOnInit(): void {
    

  }

}
