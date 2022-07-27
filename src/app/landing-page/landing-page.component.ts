import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mission: any[] = [
    {
      heading: "#1 Introduction",
      image: "../../assets/images/landing-page/mission-1.jpg",
      content: [
        {
          message: "This one is simple: you notice a lost phone on a bench."
        },
        {
          message: "Can you find the owner's address before they freak out?"
        },
      ],
      route: "/one"
    },
    {
      heading: "#2 Runaway",
      image: "../../assets/images/landing-page/mission-2.jpg",
      content: [
        {
          message: "Two nights age, your cousin Ruby's daughter Michelle disappeared."
        },
        {
          message: "Ruby heard how you returned Spencer's lost phone and hopes you can help her now."
        },
        {
          message: "It looks like everything was deleted from Michelle's phone, but it might still hold clues for someone good at investigation."
        },
        {
          message: "Search the device to help Ruby find Michelle!"
        },
      ],
      route: "/two"
    },
    {
      heading: "#3 Meet Cute",
      image: "../../assets/images/landing-page/mission-3.jpg",
      content: [
        {
          message: "Your friend Mohit is in a total slump after getting dumped, but you think they'd hit it off with your classmte Riya. When you overhear Riya say she's seeing her favorite and after class, you decide to arrange a meet-cute."
        },
        {
          message: "Unfortunately, Riya rushes out of class before you ask her. And worse, she forget her notebook and cellphone. You're positive you can locate the concert if you open Mara's phone. Then, Mohit can return it to her tonight."
        },
        {
          message: "See if you can find where the band is playing."
        },
      ],
      route: "/three"
    },
  ]

  public scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
