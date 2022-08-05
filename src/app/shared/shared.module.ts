import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MissionScreenComponent } from './mission-screen/mission-screen.component';



@NgModule({
  declarations: [
    MissionScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class SharedModule { }
