import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images-five',
  templateUrl: './images-five.component.html'
})
export class ImagesFiveComponent implements OnInit {

  public num:number = 0;
  constructor(private route:Router) { }

  ngOnInit(): void {
    if(this.route.url === '/five/device')
      this.num = 1;

    if(this.route.url === '/five/target')
      this.num = 2;

    if(this.route.url === '/five/pdf')
      this.num = 3;
  }

}
