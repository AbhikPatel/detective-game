import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenny-chat-four',
  templateUrl: './jenny-chat-four.component.html'
})
export class JennyChatFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat:any[] = [
    {
      name:'sender',
      message:"Hi girl!"
    },
    {
      name:'user',
      message:"Hey..."
    },
    {
      name:'sender',
      message:"Everything ok??"
    },
    {
      name:'user',
      message:"Not really"
    },
    {
      name:'sender',
      message:"What happened??"
    },
    {
      name:'user',
      message:"Idk, I think I'm just throwing a pity party over selling the house"
    },
    {
      name:'sender',
      message:"Did you call up that clingy real estate agent?"
    },
  ];

  chat2:any[] = [
    {
      name:'sender',
      message:"I'm so sorry I know how attached you are to that place. But this mansion slash estate slash paradise is going to be wayy better! No bad memories there"
    },
    {
      name:'sender',
      message:"Except the ghost of Mr. Marionette, Is there anything I can do to make you feel better?"
    },
    {
      name:'user',
      message:"Want to come over for a beer? Let's enjoy the house while we still can"
    },
    {
      name:'sender',
      message:"Sure thing! Give me 15 minutes. The beer is on me!"
    },
    {
      name:'user',
      message:"I'll order pizza from the new app I installed. Last time it got here in 3 minutes!!"
    },
    {
      name:'user',
      message:"You're the best friend ever!"
    },
  ]
}
