import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private logoUrl: string;

  constructor() { 
    this.logoUrl = "assets/img/safemoonchartslogo.png";
  }

  ngOnInit(): void {
  }

  public getLogoUrl() {
    return this.logoUrl;
  }

}
