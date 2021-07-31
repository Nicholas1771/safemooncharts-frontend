import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SafemoonTransaction } from '../models/safemoontransaction';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private transactionsUrl: string;
  private balanceUrl: string;
  private reflectionsUrl: string;

  constructor(private http: HttpClient) { 
      this.transactionsUrl = "http://localhost:8081/transactions";
      this.balanceUrl = "http://localhost:8081/balances";
      this.reflectionsUrl = "http://localhost:8081/reflections";
  }

  public getSafemoonTransactions(address: string): Observable<SafemoonTransaction[]> {
    return this.http.get<SafemoonTransaction[]>(this.transactionsUrl + "?address=" + address);
  }

  public getSafemoon(address: string): Observable<string> {
    return this.http.get(this.balanceUrl + "?address=" + address + "&type=SFM", {responseType: 'text'});
  }

  public getPSafemoon(address: string): Observable<string> {
    return this.http.get(this.balanceUrl + "?address=" + address + "&type=pSFM", {responseType: 'text'});
  }

  public getTotalSafemoon(address: string): Observable<string> {
    return this.http.get(this.balanceUrl + "?address=" + address + "&type=all", {responseType: "text"});
  }

  public getReflections(address: string): Observable<string> {
    return this.http.get(this.reflectionsUrl + "?address=" + address + "&type=all", {responseType: "text"});
  }
}
