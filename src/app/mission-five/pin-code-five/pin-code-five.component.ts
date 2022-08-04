import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-code-five',
  templateUrl: './pin-code-five.component.html'
})
export class PinCodeFiveComponent implements OnInit {

  public pincode: any = [];
  public animation = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  number: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  pin: any[] = [1, 2, 2, 3];

  public onPin(id: number) {
    this.pincode.push(id);

    if (this.route.url === '/five/pin-code') {
      if (this.pincode.length === 4) {
        if (JSON.stringify(this.pincode) === '[5,2,9,9]')
          this.route.navigateByUrl('/five/vault')
        else {
          this.animation = true;
          setTimeout(() => {
            this.animation = false;
          }, 500)
          this.pincode = [];
        }
      }
    }

    if (this.route.url === '/five/pin-notes') {
      if (this.pincode.length === 4) {
        if (JSON.stringify(this.pincode) === '[1,0,2,3]')
          this.route.navigateByUrl('/five/notes')
        else {
          this.animation = true;
          setTimeout(() => {
            this.animation = false;
          }, 500)
          this.pincode = [];
        }
      }
    }

  }

  public onZero() {
    this.pincode.push(0);
  }

  public onBack() {
    this.pincode.pop();
  }

}
