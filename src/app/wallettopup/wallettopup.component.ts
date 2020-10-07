import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-wallettopup',
  templateUrl: './wallettopup.component.html',
  styleUrls: ['./wallettopup.component.css'],
})
export class WallettopupComponent implements OnInit {
  message: string;
  walletPage: boolean;
  amount: number;
  updatedAmount: number = 0;
  id: number;
  msg: string;
  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('customerId'));
  }

  wallet() {
    console.log(this.amount);
    this.walletService.wallet(this.amount, this.id).subscribe((response) => {
      this.updatedAmount = response;
      console.log(this.updatedAmount);
      if (this.updatedAmount != this.amount) {
        this.msg =
          'Rs.' +
          this.amount +
          'has been added to your wallet. Your current balance is: Rs.' +
          this.updatedAmount;
        this.walletPage = true;
      } else {
        this.msg = 'Wallet was not updated. Please try again later';
      }
    });
  }
}
