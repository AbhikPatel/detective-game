import { Component, OnInit } from '@angular/core';
import { MissionFourService } from '../mission-four.service';

@Component({
  selector: 'app-local-news-four',
  templateUrl: './local-news-four.component.html'
})
export class LocalNewsFourComponent implements OnInit {

  constructor(private service: MissionFourService) { }

  ngOnInit(): void {
    this.service.new.subscribe((data) => {
      if(data === true)
        this.news.unshift(this.add)
    })

    if(this.service.visited === true)
      this.news[0].status = false;
  }

  news: any[] = [
    {
      images: "../../../assets/images/mission-four/settlar.jpg",
      heading: "Settlar Agent Spotlight",
      content: "Learn how Settlar.com can save your time and money",
      route: "/four/news-settlar",
      status: false
    }
  ];

  add: any = {
    images: "../../../assets/images/mission-four/drone.jpg",
    heading: "Drone mayday",
    content: "Pizza-carrying Drone Crash in Lakewood",
    route: "/four/news-drone",
    status:true
  }

}
