import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionFourService } from '../mission-four.service';

@Component({
  selector: 'app-pizza-four',
  templateUrl: './pizza-four.component.html'
})
export class PizzaFourComponent implements OnInit {

  public appLock: boolean = false;
  // public onOrder:boolean = false;

  public pincode: any = [];
  public animation = false;
  constructor(private service:MissionFourService, private route:Router) { }

  ngOnInit(): void {
  }

  number: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pin: any[] = [1, 2, 2, 3];

  public onOrder(){
    if(this.service.pizzaLock === true)
      this.appLock = true;
    else
      this.route.navigateByUrl('/four/pizza-tracker')
  } 

  public onPin(id: number) {
    this.pincode.push(id);
    
    if (this.pincode.length === 4) {
      if (JSON.stringify(this.pincode) === '[2,8,0,9]') {
        this.service.pizzaLock = false;
        this.appLock = false;
      }
      else {
        this.animation = true;
        setTimeout(() => {
          this.animation = false;
        }, 500)
        this.pincode = [];
      }
    }
  }

  public onZero() {
    this.onPin(0)
  }

  public onBack() {
    this.pincode.pop();
  }

  public onCancel(){
    this.appLock = false;
  }

}
