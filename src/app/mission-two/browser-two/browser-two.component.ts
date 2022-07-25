import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-two',
  templateUrl: './browser-two.component.html'
})
export class BrowserTwoComponent implements OnInit {

  public history:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  public onSearch(){
    this.history = true;
  }
  
  data:any[] = [
    "What to do after a breakup",
    "Cheap hotels in berlin",
    "how to delete phone contacts",
    "convert dollar to euro",
    "HOTEL INDIGO BERLIN ADDRESS"
  ]

}
