import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-chat-three',
  templateUrl: './message-chat-three.component.html'
})
export class MessageChatThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:any[] = [
    {
      name:'Khusi',
      profile:'../../../assets/images/mission-three/avatar.png',
      date:'Jul 25',
      chat:'Nothing has ever been more..',
      route:'chat-khusi'
    },
    {
      name:'Parents',
      profile:'../../../assets/images/mission-three/avatar.png',
      date:'Jul 19',
      chat:'Love You!',
      route:'chat-parents'
    },
    {
      name:'Milan',
      profile:'../../../assets/images/mission-three/milan.jpg',
      date:'Jul 17',
      chat:'yeah I use it for everything',
      route:'chat-milan'
    },
    {
      name:'Monica',
      profile:'../../../assets/images/mission-three/monica.jpeg',
      date:'Jul 7',
      chat:'Safe travels you beautiful little..',
      route:'chat-monica'
    },
  ]

}
