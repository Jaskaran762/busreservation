import { Component, OnInit } from '@angular/core';
import { PaymentService, PaymentStatus } from '../payment.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  data: any;
  viewTicket: boolean;
  totalFare: number;
  dateOfTravel : String;
  status: PaymentStatus;
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.dateOfTravel = sessionStorage.getItem("dateOfTravel");
  }
  view() {
    this.viewTicket = true;
    this.totalFare = parseInt(sessionStorage.getItem('paymentAmount'));
    this.paymentService.getStatusById(parseInt(sessionStorage.getItem("paymentId"))).subscribe(response=>{
      this.status = response;
    })
  }
  
}
