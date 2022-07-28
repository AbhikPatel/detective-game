import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-four',
  templateUrl: './home-page-four.component.html'
})
export class HomePageFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public application: any[] = [
    {
      classname: "message",
      route: "/four/message",
      icon: "bxs-message-rounded",
      text: "Message"
    },
    {
      classname: "smart",
      route: "/four/smart",
      icon: "bxs-home-smile",
      text: "Smart Home"
    },
    {
      classname: "pizza",
      route: "/four/pizza",
      icon: "bxs-pizza",
      text: "Pizza"
    },
    {
      classname: "news",
      route: "/four/news",
      icon: "bxs-news",
      text: "Local News"
    },
  ];

}
