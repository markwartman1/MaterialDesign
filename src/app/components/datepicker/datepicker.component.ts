import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  // DATE PARAMS
  minDate = new Date(2016, 0, 1);
  maxDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
