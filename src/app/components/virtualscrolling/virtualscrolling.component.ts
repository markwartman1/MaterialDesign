import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtualscrolling',
  templateUrl: './virtualscrolling.component.html',
  styleUrls: ['./virtualscrolling.component.css']
})
export class VirtualscrollingComponent implements OnInit {

  numbers = [];

  constructor() { 
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
  }

}
