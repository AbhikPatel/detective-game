import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionFiveRoutingModule } from './mission-five-routing.module';
import { MissionFiveComponent } from './mission-five.component';
import { LockScreenFiveComponent } from './lock-screen-five/lock-screen-five.component';
import { HomeScreenFiveComponent } from './home-screen-five/home-screen-five.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageChatFiveComponent } from './message-chat-five/message-chat-five.component';
import { ChatHqFiveComponent } from './chat-hq-five/chat-hq-five.component';
import { CalenderFiveComponent } from './calender-five/calender-five.component';
import { BrowserFiveComponent } from './browser-five/browser-five.component';
import { VaultFiveComponent } from './vault-five/vault-five.component';
import { PinCodeFiveComponent } from './pin-code-five/pin-code-five.component';


@NgModule({
  declarations: [
    MissionFiveComponent,
    LockScreenFiveComponent,
    HomeScreenFiveComponent,
    MessageChatFiveComponent,
    ChatHqFiveComponent,
    CalenderFiveComponent,
    BrowserFiveComponent,
    VaultFiveComponent,
    PinCodeFiveComponent
  ],
  imports: [
    CommonModule,
    MissionFiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class MissionFiveModule { }
