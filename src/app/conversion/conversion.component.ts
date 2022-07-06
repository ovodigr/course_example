import { Component, Input, OnInit } from '@angular/core';
import { Value } from '../model/cource';
import { GetCourseService } from '../service/get-course.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  clickMessage = '';

  // @Input() value: Value
  constructor(public service: GetCourseService) {

  }

  clicks: number = 0;
  change(increased: any) {
    console.log(increased);

    // increased == true ? this.clicks++ : this.clicks--;
  }

  // public currencyState: Tstate = {
  //   firstInput: '1',
  //   secondInput: '1',
  //   firstSelect: '0',
  //   secondSelect: '2',
  // }

  // public courseState: IRes = {
  //   usd: '0',
  //   eur: '1',
  // }

  //     this.service.courseState = {
  //   'usd': res[0].buy,
  //   'eur': res[1].buy,
  // }

  OnChanges(input: string, value: string | any) {

    // console.log(value.target.id, type);
    console.log(value.target.value);

    if (input == 'first') {
      let { usd, eur } = this.service.courseState;

      this.service.currencyState.secondInput = value.target.value * parseInt(usd);

      console.log(this.service.currencyState);

      // let arr = [usd, eur, usd]
    }
    else {

      let { usd, eur } = this.service.courseState;
      this.service.currencyState.firstInput = value.target.value * parseInt(usd);
    }
  }

  ngOnInit(): void {
  }

}
