import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-one',
  templateUrl: './mission-one.component.html'
})
export class MissionOneComponent implements OnInit {

  public now: Date = new Date();
  
  constructor(private route: Router, private location: Location) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

  public onLeave() {
    this.route.navigateByUrl('landing')
  }

  public onBack() {
    this.location.back();
  }
}
