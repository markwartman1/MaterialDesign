import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  showSpinner = false;
  sub : Subscription;
  notificationNum = 5;
  count = 7;

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

  autoDecrement() {

    //let count = 0;

    // INSTANTIATE OBSERVABLE
    const customInternalObservable = new Observable<number>( observer => {
      let handle = setInterval( () => {
        observer.next(this.count);
        this.count--;
        if (this.count < 0) {
          observer.error(new Error('Count is still decrementing lessthan zero'));
        }
        if (this.count === 0) {
          observer.complete();
          clearInterval(handle);
        }
      }, 1000);
    });
    
    // SUBSCRIBE TO OBSERVABLE
    this.sub = customInternalObservable.pipe(filter(data => {
      return data > -1;
    }), map(data => {

      return 'Round: ' + data;
    })).subscribe( num => {
      console.log(num);
    }
      , error => {
        console.log(error);
        alert(error.message);
      }
      , () => {
        console.log('Completed');
        
      }
    );

  }

}
