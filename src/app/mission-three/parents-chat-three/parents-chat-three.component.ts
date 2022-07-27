import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-chat-three',
  templateUrl: './parents-chat-three.component.html'
})
export class ParentsChatThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat:any[] = [
    {
      name:'sender',
      message:"Stop texting until all hours of the night young lady"
    },
    {
      name:'user',
      message:"Is this mom or dad???"
    },
    {
      name:'sender',
      message:"Your mother!"
    },
    {
      name:'user',
      message:"I wouldn't have to ask if you both has a cell phone."
    },
    {
      name:'user',
      message:"You're the last people on earth to share a phone."
    },
    {
      name:'sender',
      message:"Whatever"
    },
    {
      name:'user',
      message:"MOM no one do like this!!"
    },
    {
      name:'sender',
      message:"I do!"
    },
    {
      name:'user',
      message:"This has to be stop"
    },
    {
      name:'sender',
      message:"I like it! it's silly"
    },
    {
      name:'user',
      message:"lol okay, Nite mom"
    },
    {
      name:'sender',
      message:"LOVE YOU!"
    },
  ]

}
