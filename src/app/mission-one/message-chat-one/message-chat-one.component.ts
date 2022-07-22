import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-chat-one',
  templateUrl: './message-chat-one.component.html'
})
export class MessageChatOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:any[] = [
    {
      name:'Dad',
      profile:'../../../assets/images/mission-one/dad.jpg',
      date:'Jul 16',
      chat:'Take care',
      route:'chat-dad'
    },
    {
      name:'Mom',
      profile:'../../../assets/images/mission-one/mom.jpg',
      date:'Jul 16',
      chat:'See you soon!',
      route:'chat-mom'
    },
  ]

}
