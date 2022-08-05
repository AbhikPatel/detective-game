import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserFiveComponent } from './browser-five/browser-five.component';
import { CachedFiveComponent } from './cached-five/cached-five.component';
import { CalenderFiveComponent } from './calender-five/calender-five.component';
import { ChatHqFiveComponent } from './chat-hq-five/chat-hq-five.component';
import { HomeScreenFiveComponent } from './home-screen-five/home-screen-five.component';
import { LockScreenFiveComponent } from './lock-screen-five/lock-screen-five.component';
import { MessageChatFiveComponent } from './message-chat-five/message-chat-five.component';
import { MissionFiveRoutingModule } from './mission-five-routing.module';
import { MissionFiveComponent } from './mission-five.component';
import { NotesFiveComponent } from './notes-five/notes-five.component';
import { PinCodeFiveComponent } from './pin-code-five/pin-code-five.component';
import { VaultFiveComponent } from './vault-five/vault-five.component';
import { ImagesFiveComponent } from './images-five/images-five.component';
import { NotesDataFiveComponent } from './notes-data-five/notes-data-five.component';


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
    PinCodeFiveComponent,
    CachedFiveComponent,
    NotesFiveComponent,
    ImagesFiveComponent,
    NotesDataFiveComponent
  ],
  imports: [
    CommonModule,
    MissionFiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class MissionFiveModule { }
