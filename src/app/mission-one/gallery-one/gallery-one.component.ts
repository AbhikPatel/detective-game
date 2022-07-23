import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-one',
  templateUrl: './gallery-one.component.html'
})
export class GalleryOneComponent implements OnInit {

  public open: boolean = false;
  public num: any;

  constructor() { }

  ngOnInit(): void {
  }

  images: any[] = [
    {
      id: 0,
      data: "../../../assets/images/mission-one/image-1.jpg",
    },
    {
      id: 1,
      data: "../../../assets/images/mission-one/image-2.jpg",
    },
    {
      id: 2,
      data: "../../../assets/images/mission-one/image-3.jpg",
    },
    {
      id: 3,
      data: "../../../assets/images/mission-one/image-4.jpg",
    },
    {
      id: 4,
      data: "../../../assets/images/mission-one/image-5.jpg",
    },
    {
      id: 5,
      data: "../../../assets/images/mission-one/image-6.jpg",
    },
    {
      id: 6,
      data: "../../../assets/images/mission-one/image-7.jpg",
    },
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
