import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionTwoRoutingModule } from './mission-two-routing.module';
import { MissionTwoComponent } from './mission-two.component';
import { MessageChatTwoComponent } from './message-chat-two/message-chat-two.component';
import { GalleryTwoComponent } from './gallery-two/gallery-two.component';
import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { NotesTwoComponent } from './notes-two/notes-two.component';
import { BrowserTwoComponent } from './browser-two/browser-two.component';
import { LeaveNoteComponent } from './leave-note/leave-note.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MissionTwoComponent,
    MessageChatTwoComponent,
    GalleryTwoComponent,
    HomePageTwoComponent,
    NotesTwoComponent,
    BrowserTwoComponent,
    LeaveNoteComponent
  ],
  imports: [
    CommonModule,
    MissionTwoRoutingModule,
    ReactiveFormsModule
  ]
})
export class MissionTwoModule { }
