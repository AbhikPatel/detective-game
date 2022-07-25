import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-one',
  templateUrl: './home-page-one.component.html'
})
export class HomePageOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public application: any[] = [
    {
      classname: "message",
      route: "/one/message",
      icon: "bxs-message-rounded",
      text: "Message"
    },
    {
      classname: "gallery",
      route: "/one/gallery",
      icon: "bx-images",
      text: "Photos"
    },
  ]
}
