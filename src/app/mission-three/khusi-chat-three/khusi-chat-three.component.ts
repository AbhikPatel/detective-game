import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khusi-chat-three',
  templateUrl: './khusi-chat-three.component.html'
})
export class KhusiChatThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat1:any[] = [
    {
      name:'sender',
      message:'RIYA',
    },
    {
      name:'sender',
      message:'RIYA',
    },
    {
      name:'sender',
      message:'RIYA',
    },
    {
      name:'user',
      message:'What??',
    },
    {
      name:'sender',
      message:"DJ SNAKE DARLING IS COMING TO TOWN",
    },
    {
      name:'user',
      message:'Are you serious??',
    },
    {
      name:'sender',
      message:"Never been more serious about anything in my entire short life",
    },
    {
      name:'user',
      message:'We have to go!!!',
    },
    {
      name:'sender',
      message:"Yes!",
    },
    {
      name:'sender',
      message:"Shoot the teacher is eyeing me.Talk later",
    },
  ];

  chat2:any[] = [
    {
      name:'user',
      message:'did you finish the homework?',
    },
    {
      name:'sender',
      message:"No. I'll be dead and rotting by the time I understand this type of math.",
    },
    {
      name:'user',
      message:'Me too',
    },
  ];

  chat3:any[] = [
    {
      name:'user',
      message:"I can't wait for the concert! I can't believe it's free!!!",
    },
    {
      name:'sender',
      message:"Nothing has ever been more important than this. We are blessed",
    }
  ];
}
