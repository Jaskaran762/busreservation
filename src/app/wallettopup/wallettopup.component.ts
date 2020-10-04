import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallettopup',
  templateUrl: './wallettopup.component.html',
  styleUrls: ['./wallettopup.component.css'],
})
export class WallettopupComponent implements OnInit {
  message: string;
  walletPage: boolean;

  constructor() {}

  ngOnInit(): void {}

  onclick(amt) {
    alert('Rs.' + amt + 'has been added to your wallet');
    sessionStorage.setItem('amt', amt);
    this.walletPage = true;
  }
}
