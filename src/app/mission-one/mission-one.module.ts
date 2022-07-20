import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionOneRoutingModule } from './mission-one-routing.module';
import { MissionOneComponent } from './mission-one.component';


@NgModule({
  declarations: [
    MissionOneComponent
  ],
  imports: [
    CommonModule,
    MissionOneRoutingModule
  ]
})
export class MissionOneModule { }
