import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MissionOneRoutingModule } from './mission-one-routing.module';
import { MissionOneComponent } from './mission-one.component';
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { MessageChatOneComponent } from './message-chat-one/message-chat-one.component';
import { DadChatOneComponent } from './dad-chat-one/dad-chat-one.component';
import { MomChatOneComponent } from './mom-chat-one/mom-chat-one.component';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MissionOneComponent,
    HomePageOneComponent,
    MessageChatOneComponent,
    DadChatOneComponent,
    MomChatOneComponent,
    GalleryOneComponent
  ],
  imports: [
    CommonModule,
    MissionOneRoutingModule,
    ReactiveFormsModule
  ]
})
export class MissionOneModule { }
