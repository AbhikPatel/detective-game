import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-chat-five',
  templateUrl: './message-chat-five.component.html'
})
export class MessageChatFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:any[] = [
    {
      name:'HQ',
      profile:'../../../assets/images/mission-three/avatar.png',
      date:'Jul 30',
      chat:'Godspeed',
      route:'chat-headquaters'
    },
  ]

}
