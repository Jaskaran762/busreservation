import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  @Input() amount: number;
  balance: number = 50;

  constructor() {}

  ngOnInit(): void {
    this.balance = this.balance + this.amount;
  }

  get bal() {
    return this.balance;
  }

  rechargeWallet() {}
}
