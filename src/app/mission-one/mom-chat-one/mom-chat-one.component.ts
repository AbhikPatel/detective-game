import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mom-chat-one',
  templateUrl: './mom-chat-one.component.html'
})
export class MomChatOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat:any[] = [
    {
      name:'sender',
      message:"Hi sweetie... this is my new number... save it if you wish!"
    },
    {
      name:'sender',
      message:"Lol!"
    },
    {
      name:'sender',
      message:"Can't believe I forgot your new home street name again..."
    },
    {
      name:'user',
      message:"No worries mom :)"
    },
    {
      name:'user',
      message:"It's Park st"
    },
    {
      name:'sender',
      message:"Thanks sweetie"
    },
    {
      name:'sender',
      message:"See you soon!"
    },
  ]

}
