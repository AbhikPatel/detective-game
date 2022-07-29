import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-three',
  templateUrl: './mission-three.component.html'
})
export class MissionThreeComponent implements OnInit {

  public now: Date = new Date();
  public demo: boolean = false;
  public leave: boolean = false;
  public sheet: boolean = false;
  public tutorial: boolean = false;
  public answerGroup!: FormGroup;

  constructor(private route: Router, private location: Location, private fb: FormBuilder) {
    this.prop();
  }

  ngOnInit(): void {
    this.sheet = true;
    this.tutorial = true;
    setTimeout(() => {
      this.sheet = false;
      this.tutorial = false;
    },3000)
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
    if (this.route.url != '/three/home' && this.route.url != '/three/message' && this.route.url != '/three/gallery')
      this.location.back();

    if (this.route.url === '/three/message')
      this.route.navigateByUrl('/three/home')

    if (this.route.url === '/three/gallery')
      this.route.navigateByUrl('/three/home')
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

  public onNo(){
    this.sheet = false;
    this.leave = false;
  }

}
