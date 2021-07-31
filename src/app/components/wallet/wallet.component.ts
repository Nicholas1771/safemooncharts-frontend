import { Component, OnInit } from '@angular/core';
import { SafemoonTransaction } from 'src/app/models/safemoontransaction';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  private addressSubmitted: boolean;
  private transactionsRetrieved: boolean;
  private balancesRetrievedCounter: number;
  private address: string;
  private safemoonTransactions: SafemoonTransaction[];
  private reflections: string;
  private safemoon: string;
  private pSafemoon: string;
  private totalSafemoon: string;

  constructor(private walletService: WalletService) { 
    this.safemoonTransactions = [];
    this.reflections = "";
    this.address = "";
    this.addressSubmitted = false;
    this.transactionsRetrieved = false;
    this.balancesRetrievedCounter = 0;
    this.safemoon = "";
    this.pSafemoon = "";
    this.totalSafemoon = "";
  }

  ngOnInit(): void {
  }

  public onSubmit(address: string) {
    this.transactionsRetrieved = false;
    this.balancesRetrievedCounter = 0;

    this.walletService.getSafemoonTransactions(address).subscribe((transactions: SafemoonTransaction[]) => {
      this.safemoonTransactions = transactions;
      this.transactionsRetrieved = true;
    });
    this.walletService.getSafemoon(address).subscribe((value: string) => {
      this.safemoon = value;
      this.balancesRetrievedCounter++;
    });
    this.walletService.getPSafemoon(address).subscribe((value: string) => {
      this.pSafemoon = value;
      this.balancesRetrievedCounter++;
    });
    this.walletService.getTotalSafemoon(address).subscribe((value: string) => {
      this.totalSafemoon = value;
      this.balancesRetrievedCounter++;
    });
    this.walletService.getReflections(address).subscribe((value: string) => {
      this.reflections = value;
    });
    this.address = address;
    this.addressSubmitted = true;
  }

  public getSafemoonTransactions(): SafemoonTransaction[] {
    return this.safemoonTransactions;
  }

  public getTransactionsRetrieved(): boolean {
    return this.transactionsRetrieved;
  }

  public getReflections(): string {
    return this.reflections;
  }

  public getAddress(): string {
    return this.address;
  }

  public getAddressSubmitted(): boolean {
    return this.addressSubmitted;
  }

  public getSafemoon(): string {
    return this.safemoon;
  }

  public getPSafemoon(): string {
    return this.pSafemoon;
  }

  public getTotalSafemoon(): string {
    return this.totalSafemoon;
  }

  public getBalancesRetrieved(): boolean {
    return this.balancesRetrievedCounter == 3;
  }
}
