import { Component, OnInit } from '@angular/core';
import { GetCourseService } from '../service/course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: GetCourseService) { }

  ngOnInit(): void {
    this.service.getData();
  }

}
