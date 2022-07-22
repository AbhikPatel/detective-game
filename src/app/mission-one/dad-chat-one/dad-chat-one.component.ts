import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dad-chat-one',
  templateUrl: './dad-chat-one.component.html'
})
export class DadChatOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat:any[] = [
    {
      name:'sender',
      message:'Hey',
      time:'1:12 PM'
    },
    {
      name:'user',
      message:'Hey!',
      time:'1:12 PM'
    },
    {
      name:'sender',
      message:"Life's good?",
      time:'1:13 PM'
    },
    {
      name:'user',
      message:'Yep. You?',
      time:'1:13 PM'
    },
    {
      name:'sender',
      message:"Yep. Gotta go check on the steaks. Good talk.",
      time:'1:13 PM'
    },
    {
      name:'user',
      message:'sender, we really need to work on your communication skills',
      time:'1:14 PM'
    },
    {
      name:'user',
      message:'Take care',
      time:'1:14 PM'
    },
  ]

}
