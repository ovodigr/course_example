import { Injectable } from '@angular/core';
import { ICource, ICourceGet, Tstate } from '../model/cource';
import { HttpClient } from "@angular/common/http"
import { COURSE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCourseService {

  constructor(private http: HttpClient) { }

  public currencyState: Tstate = {
    firstInput: 1,
    secondInput: 1,
    firstSelect: 'usd',
    secondSelect: 'usd',
  }

  public courseState: ICource = {
    'buy': {
      usd: '1',
      eur: '1',
      uan: '1',
    },
    'sale': {
      usd: '1',
      eur: '1',
      uan: '1',
    }
  }

  getData() {
    this.http.get<ICourceGet[]>(COURSE.URL)
      .subscribe((res) => {
        this.courseState = {
          'buy': {
            usd: res[0].buy,
            eur: res[1].buy,
            uan: '1',
          },
          'sale': {
            usd: res[0].sale,
            eur: res[1].sale,
            uan: '1',
          }
        }
      })
  }
}
