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
    this.safemoon = "";
    this.pSafemoon = "";
    this.totalSafemoon = "";
  }

  ngOnInit(): void {
  }

  public onSubmit(address: string) {
    this.walletService.getSafemoonTransactions(address).subscribe((transactions: SafemoonTransaction[]) => {
      this.safemoonTransactions = transactions;
    });
    this.walletService.getSafemoon(address).subscribe((value: string) => {
      this.safemoon = value;
    });
    this.walletService.getPSafemoon(address).subscribe((value: string) => {
      this.pSafemoon = value;
    });
    this.walletService.getTotalSafemoon(address).subscribe((value: string) => {
      this.totalSafemoon = value;
    });
    this.walletService.getReflections(address).subscribe((value: string) => {
      this.reflections = value;
    });
    this.address = address;
  }

  public getSafemoonTransactions(): SafemoonTransaction[] {
    return this.safemoonTransactions;
  }

  public getReflections(): string {
    return this.reflections;
  }

  public getAddress(): string {
    return this.address;
  }

  public isAddressSubmitted(): boolean {
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
}
