import { Injectable } from '@angular/core';
import { ICource, IRes, Tstate } from '../model/cource';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetCourseService {

  public currencyState: Tstate = {
    firstInput: 1,
    secondInput: 1,
    firstSelect: 0,
    secondSelect: 0,
  }

  public courseState: IRes = {
    usd: '1',
    eur: '1',
    uan: '1',
  }
}
