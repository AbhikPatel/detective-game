import { Component, OnInit } from "@angular/core";
import { MissionFourService } from "../mission-four.service";

@Component({
  selector: 'app-home-footage',
  templateUrl: './home-footage.component.html'
})
export class HomeFootageComponent implements OnInit {
  
  public lights:boolean;
  constructor(private service:MissionFourService) { 
    this.lights = this.service.Lights;
  }

  ngOnInit(): void {
  }


}
