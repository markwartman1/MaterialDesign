import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  showSpinner = false;
  sub = Subscription;
  notificationNum = 5;

  constructor() { }

  ngOnInit(): void {
    
  }

  runNotificationCountdown() {
    
    this.notificationNum--;
    
    if (this.notificationNum < 0) {
      this.notificationNum = 5;
    }
  }

  mockLoadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

}
