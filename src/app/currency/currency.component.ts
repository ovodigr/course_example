import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TNum } from '../model/cource';

import { GetCourseService } from '../service/course.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
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

}
