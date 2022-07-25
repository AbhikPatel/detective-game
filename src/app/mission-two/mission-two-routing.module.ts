import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserTwoComponent } from './browser-two/browser-two.component';
import { GalleryTwoComponent } from './gallery-two/gallery-two.component';
import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { LeaveNoteComponent } from './leave-note/leave-note.component';
import { MessageChatTwoComponent } from './message-chat-two/message-chat-two.component';
import { MissionTwoComponent } from './mission-two.component';
import { NotesTwoComponent } from './notes-two/notes-two.component';

const routes: Routes = [
  { path: '', component: MissionTwoComponent, 
    children:[
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'home', component:HomePageTwoComponent},
      { path:'message', component:MessageChatTwoComponent},
      { path:'gallery', component:GalleryTwoComponent},
      { path:'browser', component:BrowserTwoComponent},
      { path:'note', component:NotesTwoComponent},
      { path:'leave', component:LeaveNoteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionTwoRoutingModule { }
