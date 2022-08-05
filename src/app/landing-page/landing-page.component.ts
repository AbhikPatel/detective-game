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
    {
      heading: "#4 Another Phone Return",
      image: "../../assets/images/landing-page/mission-4.jpg",
      content: [
        {
          message: "Your friend frank finds a lost phone outside their house, he calls on you to help. The device appears to have no information to identify the owner, but Frank trusts you can do it."
        },
        {
          message: "Use your detective skills to locate the owner's address."
        },
      ],
      route: "/four"
    },
    {
      heading: "#5 Mr. X",
      image: "../../assets/images/landing-page/mission-5.jpg",
      content: [
        {
          message:"The World-Class Secret Police Organization (WCSP) hired you to locate a world-famous criminal known only as Mr. X."
        },
        {
          message:"WCSP's investigation has led you to an Atlantic Cruise ship where you have evidence that Mr.X is among the guests!"
        },
        {
          message:"As luck would have it, your hunch pays off. The WCSP tech team has triangulated the location of a phone hidden on the ship for Mr.X, and you were able to put your hands on it before Mr. X found it."
        },
        {
          message:"Your mission is to discover what Mr. X is planning and identify their next target!"
        }
      ],
      route: "/five"
    },
  ]

  public scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
