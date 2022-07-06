import { Component, Input, OnInit } from '@angular/core';
import { Value, TMon, Tstate, IRes } from '../model/cource';
import { GetCourseService } from '../service/course.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  constructor(public service: GetCourseService) { }

  // calc(currencyState: Tstate, courseState: IRes, firstValue: TMon, secondValue: TMon, value: any) {

  //   currencyState.firstInput = value;

  //   let res = value * (parseFloat(courseState[firstValue]) / parseFloat(courseState[secondValue]));

  //   currencyState.secondInput = +res.toFixed(2);

  // }

  onKeypress(input: string, event: any) {

    // this.calc();

    let money = ["usd", "eur", "uan"];

    let { value } = event.target;

    let { currencyState, courseState } = this.service;

    let firstSelectValue: TMon = money[currencyState.firstSelect] as TMon;

    let secondSelectValue: TMon = money[currencyState.secondSelect] as TMon;

    if (input == 'first') {

      currencyState.firstInput = value;

      let res = value * (parseFloat(courseState[firstSelectValue]) / parseFloat(courseState[secondSelectValue]));

      currencyState.secondInput = +res.toFixed(2);
    }
    else {
      {
        currencyState.secondInput = value;

        let res = value * (parseFloat(courseState[secondSelectValue]) / parseFloat(courseState[firstSelectValue]));

        currencyState.firstInput = +res.toFixed(2);
      }
    }
  }

  OnChanges(input: string, elem: string | any) {

    let money = ["usd", "eur", "uan"];

    let { value } = elem.target;

    let { currencyState } = this.service;

    if (input == 'first') {

      if (money.includes(value)) {
        currencyState.firstSelect = money.findIndex(item => item === value);
      }
    }
    else {

      if (money.includes(value)) {
        currencyState.secondSelect = money.findIndex(item => item === value);;
      }
    }
  }

  ngOnInit(): void {
  }

}
