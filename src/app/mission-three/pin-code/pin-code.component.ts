import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PincodeService } from '../service/pincode.service';

@Component({
  selector: 'app-pin-code',
  templateUrl: './pin-code.component.html'
})
export class PinCodeComponent implements OnInit {

  public pincode:any = [];
  public animation = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  number:any[] = [1,2,3,4,5,6,7,8,9];

  pin:any[] = [1,2,2,3];

  public onPin(id:number){
    this.pincode.push(id);
    
    if(this.pincode.length === 4){
      if(JSON.stringify(this.pincode) === '[4,5,8,9]')
        this.route.navigateByUrl('/three/gallery')
      else{
        this.animation = true;
        setTimeout(() => {
          this.animation = false;
        },500)
        this.pincode = [];
      }
    }
  }
   
  public onZero(){
    this.pincode.push(0);
  }

  public onBack(){
    this.pincode.pop();
  }
}
