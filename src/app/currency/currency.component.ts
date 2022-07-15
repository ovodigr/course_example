import { Component, Input, OnInit } from '@angular/core';
import { TNum } from '../model/cource';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  moneySelect = [
    { id: "usd", name: "USD" },
    { id: "eur", name: "EUR" },
    { id: "uan", name: "UAN" },
  ];

  @Input() money: TNum
  constructor() {
    this.money = 0;
  }


  ngOnInit(): void {

  }

  click() {
    console.log('1');
  }

}
