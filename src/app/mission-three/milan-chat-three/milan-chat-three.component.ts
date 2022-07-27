import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milan-chat-three',
  templateUrl: './milan-chat-three.component.html'
})
export class MilanChatThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat1:any[] = [
    {
      name:'user',
      message:"We on for later still???"
    },
    {
      name:'sender',
      message:"Bet, meet us at 6."
    },
    {
      name:'user',
      message:"The one by the gas station or the liquor store?"
    },
    {
      name:'sender',
      message:"Liquor store I think."
    },
    {
      name:'sender',
      message:"Let me double check."
    },
    {
      name:'sender',
      message:"AI says there's a liqour store by both, but it's different the one NOT by the gas station."
    },
    {
      name:'user',
      message:"See you then"
    },
  ];

  chat2:any[] = [
    {
      name:'user',
      message:"WILD that they're building a station by the other one now. How are we going to know whick skate rink we're going to if they're named the same?"
    },
    {
      name:'sender',
      message:"They tryin to trip us up. lolll!"
    }
  ];

  chat3:any[] = [
    {
      name:'sender',
      message:"You have that extra bike still right?"
    },
    {
      name:'user',
      message:"Yeah you need it???"
    },
    {
      name:'sender',
      message:"Please! My chain broke"
    },
    {
      name:'user',
      message:"np come by tomorrow and pick it up"
    },
    {
      name:'user',
      message:"or if you need it today the lock code is 4589"
    },
    {
      name:'sender',
      message:"Isn't that your garabe code too?"
    },
    {
      name:'user',
      message:"yeah ! use it for everything. lolll!!!"
    },
  ]

}
