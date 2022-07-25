import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-two',
  templateUrl: './mission-two.component.html'
})
export class MissionTwoComponent implements OnInit {

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
    if (this.route.url != '/two/home' && this.route.url != '/two/message' && this.route.url != '/two/note')
      this.location.back();

    if (this.route.url === '/two/message')
      this.route.navigateByUrl('/two/home')

    if (this.route.url === '/two/note')
      this.route.navigateByUrl('/two/home')
  }

  public get getControls() {
    return this.answerGroup['controls'];
  }

  public onCheck() {
    if (this.answerGroup.value.ans === 'Hotel Indigo, berlin') {
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
