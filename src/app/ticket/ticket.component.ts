import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  data: any;
  busId: number = 1;
  viewTicket: boolean;
  totalFare: number;
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}
  view() {
    this.viewTicket = true;
    this.totalFare = parseInt(sessionStorage.getItem('paymentAmount'));
  }
}
