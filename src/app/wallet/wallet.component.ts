import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  refundAmount: number;
  amt: number = 0;
  paymentAmount: number = 0;
  balance: number = 50;

  constructor() {}

  ngOnInit(): void {
    this.amt = parseInt(sessionStorage.getItem('amt'));
    this.paymentAmount = parseInt(sessionStorage.getItem('paymentAmount')); //on payment -
    this.refundAmount = parseInt(sessionStorage.getItem('refundAmount')); //on cancel +
    //this.balance = this.balance + this.amt; //on wallet recharge +
    sessionStorage.setItem('walletBalance', String(this.balance));
  }

  get bal() {
    return this.balance;
  }

  rechargeWallet() {}
}
