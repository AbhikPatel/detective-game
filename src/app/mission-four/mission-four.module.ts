import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionFourRoutingModule } from './mission-four-routing.module';
import { MissionFourComponent } from './mission-four.component';
import { HomePageFourComponent } from './home-page-four/home-page-four.component';
import { MessageChatFourComponent } from './message-chat-four/message-chat-four.component';
import { SmartHomeFourComponent } from './smart-home-four/smart-home-four.component';
import { PizzaFourComponent } from './pizza-four/pizza-four.component';
import { LocalNewsFourComponent } from './local-news-four/local-news-four.component';
import { DivyaChatFourComponent } from './divya-chat-four/divya-chat-four.component';
import { VishalChatFourComponent } from './vishal-chat-four/vishal-chat-four.component';
import { JennyChatFourComponent } from './jenny-chat-four/jenny-chat-four.component';
import { RadhikaChatFourComponent } from './radhika-chat-four/radhika-chat-four.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MissionFourComponent,
    HomePageFourComponent,
    MessageChatFourComponent,
    SmartHomeFourComponent,
    PizzaFourComponent,
    LocalNewsFourComponent,
    DivyaChatFourComponent,
    VishalChatFourComponent,
    JennyChatFourComponent,
    RadhikaChatFourComponent
  ],
  imports: [
    CommonModule,
    MissionFourRoutingModule,
    ReactiveFormsModule
  ]
})
export class MissionFourModule { }
