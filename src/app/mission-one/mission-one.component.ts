import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-one',
  templateUrl: './mission-one.component.html'
})
export class MissionOneComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public onLeave(){
    this.route.navigateByUrl('landing')
  }
}
