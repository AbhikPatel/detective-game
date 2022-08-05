import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender-five',
  templateUrl: './calender-five.component.html'
})
export class CalenderFiveComponent implements OnInit {

  month: number = 2;
  event:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public onNext() {
    if (this.month != 3)
      this.month++;
  }

  public onPrev() {
    if (this.month != 1)
      this.month--;
  }

  public onDate(id:number){
    this.event = id;
  }

}
