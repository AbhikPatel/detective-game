import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-chat-four',
  templateUrl: './message-chat-four.component.html'
})
export class MessageChatFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:any[] = [
    {
      name:'Divya',
      profile:'../../../assets/images/mission-four/divya.jpg',
      date:'Jul 25',
      chat:'Remember, SMALL TALK, then go...',
      route:'divya-chat'
    },
    {
      name:'Vishal',
      profile:'../../../assets/images/mission-three/avatar.png',
      date:'Jul 25',
      chat:'Of course!!! You can call anytime!',
      route:'vishal-chat'
    },
    {
      name:'Jenny',
      profile:'../../../assets/images/mission-four/jenny.jpg',
      date:'Jul 23',
      chat:"You're the best friend ever!",
      route:'jenny-chat'
    },
    {
      name:'Radhika (Agent)',
      profile:'../../../assets/images/mission-four/radhika.jpg',
      date:'Jul 22',
      chat:'uhh, okay',
      route:'radhika-chat'
    },
  ]

}
