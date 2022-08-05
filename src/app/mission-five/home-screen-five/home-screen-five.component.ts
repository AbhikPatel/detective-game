import { Component, OnInit } from '@angular/core';
import { MissionFiveService } from '../mission-five.service';

@Component({
  selector: 'app-home-screen-five',
  templateUrl: './home-screen-five.component.html'
})
export class HomeScreenFiveComponent implements OnInit {

  constructor(private service:MissionFiveService) { }

  ngOnInit(): void {
    this.service.vaultLock.subscribe((data) => {
      if(data === false)
        this.application[1].route = '/five/vault'
    })
  }

  public application: any[] = [
    {
      classname: "message",
      route: "/five/message",
      icon: "bxs-message-rounded",
      text: "Message"
    },
    {
      classname: "vault",
      route: "/five/pin-code",
      icon: "bxs-box",
      text: "Vault"
    },
    {
      classname: "calender",
      route: "/five/calender",
      icon: "bxs-calendar-event",
      text: "Calender"
    },
    {
      classname: "browser",
      route: "/five/browser",
      icon: "bx-globe",
      text: "Browser"
    },
  ];

}
