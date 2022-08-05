import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-data-five',
  templateUrl: './notes-data-five.component.html'
})
export class NotesDataFiveComponent implements OnInit {

  notes:number = 0;
  constructor(private route:Router) { }

  ngOnInit(): void {
    if(this.route.url === '/five/shadownet')
      this.notes = 1;

    if(this.route.url === '/five/jonathan')
      this.notes = 2;

    if(this.route.url === '/five/untitled')
      this.notes = 3;

    if(this.route.url === '/five/wcsp')
      this.notes = 4;

    if(this.route.url === '/five/game')
      this.notes = 5;
  }

}
