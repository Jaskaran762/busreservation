import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  balance:number = 50;
  constructor() { }

  ngOnInit(): void {
  }

  get bal(){
    return this.balance;
  }

  rechargeWallet(){
    
  }

}
