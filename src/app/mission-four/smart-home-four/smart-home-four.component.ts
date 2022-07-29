import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionFourService } from '../mission-four.service';

@Component({
  selector: 'app-smart-home-four',
  templateUrl: './smart-home-four.component.html'
})
export class SmartHomeFourComponent implements OnInit {

  public appLock: boolean = false;
  public doorLock: boolean = true;
  public lights: boolean = false;
  public catfeeder: boolean = false;

  public pincode: any = [];
  public animation = false;
  constructor(private service: MissionFourService, private route:Router) { 
    this.lights = this.service.Lights
  }

  ngOnInit(): void {
  }


  number: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pin: any[] = [1, 2, 2, 3];

  public onDoorLock() {
    if (this.service.smartAuth === false) {
      this.appLock = true;
    } else {
      if (this.doorLock)
        this.doorLock = false;
      else
        this.doorLock = true;
    }
  }

  public onLights() {
    if (this.service.smartAuth === false) {
      this.appLock = true;
    } else {
      if (this.lights){
        this.service.Lights = false;
        this.lights = false;
      }
      else{
        this.service.Lights = true;
        this.lights = true;
      }
    }
  }

  public onCatFeeder() {
    if (this.service.smartAuth === false) {
      this.appLock = true;
    } else {
      if (this.catfeeder)
        this.catfeeder = false;
      else
        this.catfeeder = true;
    }
  }

  public onPin(id: number) {
    this.pincode.push(id);
    
    if (this.pincode.length === 4) {
      if (JSON.stringify(this.pincode) === '[1,1,1,0]') {
        this.service.smartAuth = true;
        this.pincode = true;
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

  public onHome(){
    if(this.service.smartAuth === true)
      this.route.navigateByUrl('/four/home-footage')
    else
      this.appLock = true;
  }
}
