import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  @Input() amount: number;
  amt: number = 0;
  balance: number = 50;

  constructor() {}

  ngOnInit(): void {
    this.amt = parseInt(sessionStorage.getItem('amt'));
    this.balance = this.balance + this.amt;
  }

  get bal() {
    return this.balance;
  }

  rechargeWallet() {}
}
