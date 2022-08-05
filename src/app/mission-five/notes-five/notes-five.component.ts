import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-five',
  templateUrl: './notes-five.component.html'
})
export class NotesFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notes:any[] = [
    {
      heading:"ShadowNet",
      data:"To the noble Mr.X,",
      route:"/five/shadownet"
    },
    {
      heading:"Jonathan Barrett",
      data:"Known as 'The Stroll'",
      route:"/five/jonathan"
    },
    {
      heading:"Untitled",
      data:"Pain and suffering",
      route:"/five/untitled"
    },
    {
      heading:"WCSP",
      data:"Diamond - 1502",
      route:"/five/wcsp"
    },
    {
      heading:"The Game",
      data:"I was most interested",
      route:"/five/game"
    },
  ]
}
