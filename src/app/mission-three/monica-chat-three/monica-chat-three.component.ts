import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monica-chat-three',
  templateUrl: './monica-chat-three.component.html'
})
export class MonicaChatThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat1: any[] = [
    {
      name: 'user',
      message: "How are you holding up?"
    },
    {
      name: 'sender',
      message: "idk"
    },
    {
      name: 'user',
      message: "I know breakups are hard, but I'm here if you need me"
    },
  ];

  chat2: any[] = [
    {
      name: 'user',
      message: "DJ Snake got an upcoming show, come with??"
    },
    {
      name: 'sender',
      message: "I might skip town"
    },
    {
      name: 'user',
      message: "What???"
    },
    {
      name: 'sender',
      message: "I need a change of scenery"
    },
    {
      name: 'user',
      message: "Class is about to start but call me later?"
    },
    {
      name: 'sender',
      message: "kk"
    },
  ];

  chat3: any[] = [
    {
      name: 'user',
      message: "I thought about our conversation yesterday and I think you should do what your heart tells you!"
    },
    {
      name: 'sender',
      message: "I'm gonna do it!!"
    },
    {
      name: 'user',
      message: "Safe travels you beautiful litte dove"
    },
  ]
}
