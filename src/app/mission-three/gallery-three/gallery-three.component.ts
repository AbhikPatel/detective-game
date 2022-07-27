import { Component, OnInit } from '@angular/core';
import { PincodeService } from '../service/pincode.service';

@Component({
  selector: 'app-gallery-three',
  templateUrl: './gallery-three.component.html'
})
export class GalleryThreeComponent implements OnInit {

  public open: boolean = false;
  public num: any;

  constructor() { 

  }

  ngOnInit(): void {
  }

  images: any[] = [
    {
      id: 0,
      data: "../../../assets/images/mission-three/image-1.jpg",
    },
    {
      id: 1,
      data: "../../../assets/images/mission-three/image-2.jpg",
    },
    {
      id: 2,
      data: "../../../assets/images/mission-three/ticket.jpg",
    },
    {
      id: 3,
      data: "../../../assets/images/mission-three/image-3.jpg",
    },
    {
      id: 4,
      data: "../../../assets/images/mission-three/image-4.jpg",
    }
  ]

  public onclick(id: number) {
    this.open = true;
    this.num = id;
  }

  public onCross() {
    if(this.open === true){
      this.open = false;
    }
  }

}
