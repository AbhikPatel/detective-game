import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-hq-five',
  templateUrl: './chat-hq-five.component.html'
})
export class ChatHqFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat:any[] = [
    {
      name:'sender',
      message:"Hi Boss, hope it was'nt too hard for you to locate this phone.",
    },
    {
      name:'sender',
      message:"We loaded it with all the information you requested.",
    },
    {
      name:'sender',
      message:"We also synced your calender so you won't miss any important events.",
    },
    {
      name:'sender',
      message:"The vault's password is your favorite Golden Retriever",
    },
    {
      name:'sender',
      message:"Godspeed",
    },
  ]

}
