import { Component, OnInit } from '@angular/core';
import { MissionFourService } from '../mission-four.service';

@Component({
  selector: 'app-pizza-tracker-four',
  templateUrl: './pizza-tracker-four.component.html'
})
export class PizzaTrackerFourComponent implements OnInit {

  public deliveryTime: number = 30;
  public connectionFailed: boolean = false;
  constructor(private service: MissionFourService) {
    if(this.service.connectionFailed === true)
      this.connectionFailed = true
  }

  ngOnInit(): void {

    setInterval(() => {
      this.deliveryTime--;
    }, 1000)

    setTimeout(() => {
      this.connectionFailed = true;
      this.service.connectionFailed = true;
    },15000)
    
  }

}
