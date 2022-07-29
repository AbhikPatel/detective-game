import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vishal-chat-four',
  templateUrl: './vishal-chat-four.component.html'
})
export class VishalChatFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat1:any[] = [
    {
      name:'sender',
      message:"hi, It's Vishal. here's my new number"
    },
    {
      name:'user',
      message:"Hey Vishal! How's it been?"
    },
    {
      name:'sender',
      message:"We miss u at work, but I'm glad you got hired full-time at the vet"
    },
    {
      name:'user',
      message:"I bet, I am pretty cool"
    },
    {
      name:'user',
      message:"Seriously thought I miss you all too! But this job is the dream! I play with cats allll day"
    },
  ];

  chat2:any[] = [
    {
      name:'user',
      message:"Wanna hand out today?"
    },
    {
      name:'sender',
      message:"I can't"
    },
    {
      name:'user',
      message:"Don't tell me there's been another fish accident!"
    },
    {
      name:'sender',
      message:"nothing THAT serious! lmao"
    },
    {
      name:'sender',
      message:"but Sarah and I are meeting at La pino's to talk"
    },
    {
      name:'user',
      message:"Oh! No worries, good luck!"
    }
  ];

  chat3:any[] = [
    {
      name:'user',
      message:"How did last night go?"
    },
  ];

  chat4:any[] = [
    {
      name:'user',
      message:"as good as I could hope"
    }
  ];

  chat5:any[] = [
    {
      name:'sender',
      message:"can I call you? I could use a friend"
    }
  ];

  chat6:any[] = [
    {
      name:'user',
      message:"Of course!!! You can call anytime!"
    },
  ]

}
