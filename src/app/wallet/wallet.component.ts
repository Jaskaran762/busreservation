import { Component, Input, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

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
  customerId: number;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
    this.walletService.showWallet(this.customerId).subscribe((response) => {
      this.balance = response;
      console.log(this.balance);
      sessionStorage.setItem('walletBalance', String(this.balance));
    });
  }

  get bal() {
    return this.balance;
  }

  rechargeWallet() {}
}
