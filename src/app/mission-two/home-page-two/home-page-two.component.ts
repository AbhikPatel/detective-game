import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home-page-two.component.html'
})
export class HomePageTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public application:any[] = [
    {
      classname:"message",
      route:"/two/message",
      icon:"bxs-message-rounded",
      text:"Message"
    },
    {
      classname:"gallery",
      route:"/two/gallery",
      icon:"bx-images",
      text:"Photos"
    },
    {
      classname:"notes",
      route:"/two/note",
      icon:"bx-notepad",
      text:"Notes"
    },
    {
      classname:"browser",
      route:"/two/browser",
      icon:"bx-globe",
      text:"Browser"
    },
  ]

}
