import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Str } from '../model/cource';

import { GetCourseService } from '../service/get-course.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  // arr = [
  //   { str: 'A', isSelected: false },
  //   { str: 'B', isSelected: true }, //
  //   { str: 'C', isSelected: false },
  //   { str: 'D', isSelected: false },
  // ];
  moneySelect = [
    { id: "usd", name: "USD" },
    { id: "eur", name: "EUR" },
    { id: "uan", name: "UAN" },
  ];

  @Input() money: Str
  constructor(private http: HttpClient, private service: GetCourseService) {

  }
  public getPosts() {

    // this.posts = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');

  }


  ngOnInit(): void {

  }

}
