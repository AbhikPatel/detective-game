import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divya-chat-four',
  templateUrl: './divya-chat-four.component.html'
})
export class DivyaChatFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chat:any[] = [
    {
      name:'sender',
      message:"Oh my gosh, you will never believe who I saw today!"
    },
    {
      name:'user',
      message:"Dont make me guess, you know how bad I am at that!"
    },
    {
      name:'sender',
      message:"Okay, so do you rememeber that guy who sat next to you in Choir back in 10th grade?"
    },
    {
      name:'user',
      message:"No way. Raj? Jay? You were always so into him! What's he up to these days?"
    },
    {
      name:'sender',
      message:"He's in school to be a doctor! I think I'm still crushing on him! But I've never had a boyfriend before and he is so charming what should I do?!"
    },
    {
      name:'user',
      message:"Just approach him and make small talk! Ask him to the movies or the park or something"
    },
    {
      name:'sender',
      message:"And say what? My cat died yesterday, oh by the way, I like you?"
    },
    {
      name:'user',
      message:"That is the farthest thing from what you should do. just flirt with him and see what he's into. Baby steps, you know?"
    },
    {
      name:'sender',
      message:"I'm freaking out, but I think I'm going to go for it! What if he totally rejects me?"
    },
    {
      name:'user',
      message:"Then move on to the next! Since when is it hard for you to turn heads?"
    },
    {
      name:'sender',
      message:"Turning heads is diff from dating! i'm gonna go for it. I'll call you right after!"
    },
    {
      name:'user',
      message:"Remember, SMALL TALK, then go from there. Break the ice with something embrassing like the time you had broccoli in you teeth and no one told you and you went the whole day wondering why everyone at the pool kept staring at you!!"
    },
  ]
}
