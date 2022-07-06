import { Component, OnInit } from '@angular/core';
import { TMon, Tstate, ICource, TInput, TSelect } from '../model/cource';
import { GetCourseService } from '../service/course.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  constructor(public service: GetCourseService) { }

  calc(currencyState: Tstate, select: TSelect, firstInput: TInput, secondInput: TInput,
    first: TMon, second: TMon, courseState: ICource, value: any) {

    let typeCurrency: keyof ICource;

    if (currencyState[select] === 'uan')
      typeCurrency = 'sale';
    else
      typeCurrency = 'buy';

    let res = value * (parseFloat(courseState[typeCurrency][first]) /
      parseFloat(courseState[typeCurrency][second]));

    currencyState[firstInput] = value;

    currencyState[secondInput] = +res.toFixed(3);
  }

  onKeypress(input: string, event: any) {

    let { value } = event.target;

    let { currencyState, courseState } = this.service;

    let firstSelectValue: TMon = currencyState.firstSelect as TMon;

    let secondSelectValue: TMon = currencyState.secondSelect as TMon;

    if (value != 'USD' && value != 'EUR' && value != 'UAN') {
      if (input == 'first') {
        this.calc(currencyState, 'firstSelect', 'firstInput', 'secondInput',
          firstSelectValue, secondSelectValue, courseState, value);
      }
      else {
        this.calc(currencyState, 'secondSelect', 'secondInput', 'firstInput',
          secondSelectValue, firstSelectValue, courseState, value);
      }
    }

  }

  OnChanges(input: string, elem: string | any) {

    let money = ["usd", "eur", "uan"];

    let { value } = elem.target;

    value = value.toLowerCase();

    let { currencyState } = this.service;

    if (money.includes(value)) {

      if (input === 'first') {
        currencyState.firstSelect = value;
      }
      else {
        currencyState.secondSelect = value;
      }
    }
  }

  ngOnInit(): void {
  }
}
