import { Component, OnInit } from '@angular/core';
import { ICource, ITodo, IRes } from '../model/cource';
import { GetCourseService } from '../service/course.service';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public res: ICource[] = [];

  public cource: IRes = {
    usd: '0',
    eur: '0',
  };

  constructor(private http: HttpClient, public service: GetCourseService) {

  }

  getData() {

    this.http.get<ICource[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')

      .subscribe((res) => {

        this.service.courseState = {
          'usd': res[0].buy,
          'eur': res[1].buy,
          'uan': '1',
        }
      })
  }

  ngOnInit(): void {
    this.getData();
  }

}
