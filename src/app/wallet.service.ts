import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor(private http: HttpClient) {}

  wallet(amount: number, customerId: number): Observable<any> {
    let url =
      'http://localhost:8181/addWallet?&customerId=' +
      customerId +
      '&amount=' +
      amount;
    return this.http.get(url);
  }

  showWallet(customerId: number): Observable<any> {
    let url = 'http://localhost:8181/showWallet?&customerId=' + customerId;
    return this.http.get(url);
  }
}
