import { Component, OnInit } from '@angular/core';
import { MissionFourService } from '../mission-four.service';

@Component({
  selector: 'app-news-drone',
  templateUrl: './news-drone.component.html'
})
export class NewsDroneComponent implements OnInit {

  constructor(private service:MissionFourService) { }

  ngOnInit(): void {
    this.service.visited = true;
  }

}
