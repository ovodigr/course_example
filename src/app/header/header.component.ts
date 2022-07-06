import { Component, OnInit } from '@angular/core';
import { ICource, ITodo, IRes } from '../model/cource';
import { GetCourseService } from '../service/get-course.service';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // public response: ITodo = {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // };

  public res: ICource[] = [];

  public cource: IRes = {
    usd: '0',
    eur: '0',
  };
  // res[0] = {
  //   'base_ccy': 'string';
  //   'buy': 'string';
  //   'ccy': 'string';
  //   'bassalee_ccy': 'string';
  // }


  constructor(private http: HttpClient, public service: GetCourseService) {

  }

  getData() {
    // this.service.getCourse();
  }


  search2() {

    // this.getData();

    // this.service.getCourse();


    this.http.get<ICource[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')

      .subscribe((res) => {

        // this.cource['usd'] = res[0].buy;
        // this.cource['eur'] = res[1].buy;

        this.service.courseState = {
          'usd': res[0].buy,
          'eur': res[1].buy,
        }

        console.log(this.cource);
        console.log(this.service);
      })
  }

  ngOnInit(): void {

    // this.getData();
    this.search2();
  }

}
