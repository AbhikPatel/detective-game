import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vault-five',
  templateUrl: './vault-five.component.html'
})
export class VaultFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public application: any[] = [
    {
      classname: "police",
      route: "/five/pdf",
      icon: "bxs-file-pdf",
      text: "WCSP.pdf"
    },
    {
      classname: "device",
      route: "/five/device",
      icon: "bxs-brain",
      text: "Device"
    },
    {
      classname: "target",
      route: "/five/target",
      icon: "bx-target-lock",
      text: "Target"
    },
    {
      classname: "notes",
      route: "/five/pin-notes",
      icon: "bxs-notepad",
      text: "Notes"
    },
  ];

}
