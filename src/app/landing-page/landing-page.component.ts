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
  ]

  public scrollToElement($element:any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
