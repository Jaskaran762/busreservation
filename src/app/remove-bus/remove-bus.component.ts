import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-remove-bus',
  templateUrl: './remove-bus.component.html',
  styleUrls: ['./remove-bus.component.css']
})
export class RemoveBusComponent implements OnInit {
  busNumber:string ;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    
  }
  removeBus(){
    this.service.onRemoveBus(this.busNumber).subscribe();

  }
}
