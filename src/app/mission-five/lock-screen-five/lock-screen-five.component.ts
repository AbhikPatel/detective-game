import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lock-screen-five',
  templateUrl: './lock-screen-five.component.html'
})
export class LockScreenFiveComponent implements OnInit {

  public pinLock: boolean = false;
  public animation:boolean = false;
  public pincode: any = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  number: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pin: any[] = [1, 2, 2, 3];

  public onScreen() {
    this.pinLock = true;
  }

  public onPin(id: number) {
    this.pincode.push(id);

    if (this.pincode.length === 4) {
      if (JSON.stringify(this.pincode) === '[1,9,5,7]') {
        this.route.navigateByUrl('/five/home')
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

  public onCancel() {
    this.pinLock = false;
  }

}
