import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = "https://safemooncharts.herokuapp.com/accounts";
  }

  public getAccount(email: string): Observable<Account> {
    return this.http.get<Account>(this.accountsUrl + "/" + email);
  }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  public login(email: string, password: string): Observable<string> {
    return this.http.post<string>(this.accountsUrl, {email: email, password: password});
  }

  public register(account: {email: string, password: string}) {
    console.log("registering account " + account.email + " " + account.password);
    return this.http.post(this.accountsUrl, account);
  }

}
