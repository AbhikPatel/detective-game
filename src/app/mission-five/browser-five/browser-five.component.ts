import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-five',
  templateUrl: './browser-five.component.html'
})
export class BrowserFiveComponent implements OnInit {

  public history:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  public onSearch(){
    this.history = true;
  }
  
  data:any[] = [
    "www.funny.dogs/charlie",
    "how to groom an golden retriever",
    "the glided mermaid",
    "if you don't control your mind someone else will",
    "www.wcsp.gov/awards-2020"
  ]

}
