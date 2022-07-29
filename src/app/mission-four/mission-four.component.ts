import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MissionFourService } from './mission-four.service';

@Component({
  selector: 'app-mission-four',
  templateUrl: './mission-four.component.html'
})
export class MissionFourComponent implements OnInit {

  public now: Date = new Date();
  public demo: boolean = false;
  public leave: boolean = false;
  public sheet: boolean = false;
  public tutorial: boolean = false;
  public notification: boolean = false;
  public answerGroup!: FormGroup;

  constructor(private route: Router, private location: Location, private fb: FormBuilder, private service: MissionFourService) {
    this.prop();
  }

  ngOnInit(): void {
    // this.sheet = true;
    // this.tutorial = true;
    // setTimeout(() => {
    //   this.sheet = false;
    //   this.tutorial = false;
    // },3000)
  }

  public prop() {
    setInterval(() => {
      this.now = new Date();
    }, 1);

    this.answerGroup = this.fb.group({
      ans: ['', [Validators.required]]
    })
  }

  public onLeave() {
    this.leave = true;
    this.sheet = true;
  }

  public onBack() {
    if (this.route.url != '/four/home' && this.route.url != '/four/message' && this.route.url != '/four/pizza-tracker')
      this.location.back();

    if (this.route.url === '/four/message')
      this.route.navigateByUrl('/four/home')

    if (this.route.url === '/four/pizza-tracker' && this.service.connectionFailed === true)
      this.route.navigateByUrl('/four/home')
  }

  public get getControls() {
    return this.answerGroup['controls'];
  }

  public onCheck() {
    let answer = this.answerGroup.value.ans.trim();
    answer = answer.split(/[ ,]+/);

    for (let i = 0; i < answer.length; i++) {
      answer[i] = answer[i].charAt(0).toUpperCase() + answer[i].substr(1);
    }

    if (answer.toString() === 'National,Stadium') {
      this.demo = true;
      this.sheet = true;
      setTimeout(() => {
        this.sheet = false;
        this.demo = false;
        this.route.navigateByUrl('/landing');
      }, 3000)
    }
  }

  public onNo() {
    this.sheet = false;
    this.leave = false;
  }

  public onHome() {
    if (this.route.url != '/four/pizza-tracker') {
      this.route.navigateByUrl('/four/home')
    } else {
      if (this.service.connectionFailed === true)
        this.route.navigateByUrl('/four/home')
    }
  }

  public onNotification(){
    this.route.navigateByUrl('/four/news');
    this.notification = false;
  }

}
