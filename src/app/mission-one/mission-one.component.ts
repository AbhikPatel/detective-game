import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-one',
  templateUrl: './mission-one.component.html'
})
export class MissionOneComponent implements OnInit {

  public now: Date = new Date();
  public demo: boolean = false;
  public leave: boolean = false;
  public sheet: boolean = false;
  public answerGroup!: FormGroup;

  constructor(private route: Router, private location: Location, private fb: FormBuilder) {
    this.prop();
  }

  ngOnInit(): void {
  }

  public prop() {
    setInterval(() => {
      this.now = new Date();
    }, 1);

    this.answerGroup = this.fb.group({
      ans: ['', [Validators.required]]
    })

    console.log(this.route.url);

  }

  public onLeave() {
    this.leave = true;
    this.sheet = true;
  }

  public onBack() {
    if (this.route.url != '/one/home' && this.route.url != '/one/message')
      this.location.back();

    if (this.route.url === '/one/message')
      this.route.navigateByUrl('/one/home')
  }

  public get getControls() {
    return this.answerGroup['controls'];
  }

  public onCheck() {
    if (this.answerGroup.value.ans === 'Park st 30') {
      this.demo = true;
      this.sheet = true;
      setTimeout(() => {
        this.sheet = false;
        this.demo = false;
        this.route.navigateByUrl('/landing');
      }, 5000)
    }
  }

  public onNo(){
    this.sheet = false;
    this.leave = false;
  }
}
