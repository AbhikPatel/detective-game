import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radhika-chat-four',
  templateUrl: './radhika-chat-four.component.html'
})
export class RadhikaChatFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat1:any[] = [
    {
      name:'sender',
      message:"Hello!!! its Radhika Patel"
    },
    {
      name:'sender',
      message:"We spoke on the telephone about listing your house on Settlar"
    },
    {
      name:'user',
      message:"Hi! Thanks for reaching out.I'll let you know if I ever want to sell."
    },
    {
      name:'sender',
      message:"Just think of all the things you could do with a bigger home! Maybe even a pool or a sauna? I know a great house for sale not far from you."
    },
    {
      name:'user',
      message:"Thanks, I'll let you know if I'm ever interested."
    },
    {
      name:'sender',
      message:"Not a problem, dear. I'll check back in later"
    },
  ];

  chat2:any[] = [
    {
      name:'sender',
      message:"Hello!"
    }
  ];

  chat3:any[] = [
    {
      name:'sender',
      message:"Hello, Any thoughts on selling"
    }
  ];

  chat4:any[] = [
    {
      name:'user',
      message:"Hi, is this still radhika?"
    },
    {
      name:'sender',
      message:"Yes! To what do I owe the pleasure?"
    },
    {
      name:'user',
      message:"I'm ready to list the house"
    },
    {
      name:'sender',
      message:"Oh, goodie! The house is really immaculate. I believe we can get an offer faster than you can say I need a mortgage!"
    },
    {
      name:'user',
      message:"Thankfully I won't need a new one"
    },
    {
      name:'sender',
      message:"I'm sorry?"
    },
    {
      name:'user',
      message:"It's a long story, but I'm inheriting a house"
    },
    {
      name:'sender',
      message:"I see, so you won't need help buying a new one?"
    },
    {
      name:'user',
      message:"Nope! just selling"
    },
    {
      name:'sender',
      message:"A slight disappointment, but I can work with it!"
    },
    {
      name:'user',
      message:"Uh, okay"
    },
  ]
}
