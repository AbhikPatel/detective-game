import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-three',
  templateUrl: './home-page-three.component.html'
})
export class HomePageThreeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  public application: any[] = [
    // {
    //   classname: "phone",
    //   route: "/three/call",
    //   icon: "bxs-phone",
    //   text: "Phone"
    // },
    {
      classname: "message",
      route: "/three/message",
      icon: "bxs-message-rounded",
      text: "Message"
    },
    {
      classname: "gallery",
      route: "/three/pin-code",
      icon: "bx-images",
      text: "Photos"
    },
  ];

}
