import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserFiveComponent } from './browser-five/browser-five.component';
import { CachedFiveComponent } from './cached-five/cached-five.component';
import { CalenderFiveComponent } from './calender-five/calender-five.component';
import { ChatHqFiveComponent } from './chat-hq-five/chat-hq-five.component';
import { HomeScreenFiveComponent } from './home-screen-five/home-screen-five.component';
import { ImagesFiveComponent } from './images-five/images-five.component';
import { LockScreenFiveComponent } from './lock-screen-five/lock-screen-five.component';
import { MessageChatFiveComponent } from './message-chat-five/message-chat-five.component';
import { MissionFiveComponent } from './mission-five.component';
import { NotesDataFiveComponent } from './notes-data-five/notes-data-five.component';
import { NotesFiveComponent } from './notes-five/notes-five.component';
import { PinCodeFiveComponent } from './pin-code-five/pin-code-five.component';
import { VaultFiveComponent } from './vault-five/vault-five.component';

const routes: Routes = [
  { path: '', component: MissionFiveComponent, 
    children:[
      { path:'', redirectTo:'lock-screen', pathMatch:'full'},
      { path:'lock-screen' , component:LockScreenFiveComponent},
      { path:'home' , component:HomeScreenFiveComponent},
      { path:'message' , component:MessageChatFiveComponent},
      { path:'chat-headquaters' , component:ChatHqFiveComponent},
      { path:'browser' , component:BrowserFiveComponent},
      { path:'calender' , component:CalenderFiveComponent},
      { path:'vault' , component:VaultFiveComponent},
      { path:'pin-code' , component:PinCodeFiveComponent},
      { path:'cached' , component:CachedFiveComponent},
      { path:'pin-notes' , component:PinCodeFiveComponent},
      { path:'notes' , component:NotesFiveComponent},
      { path:'device' , component: ImagesFiveComponent},
      { path:'target' , component: ImagesFiveComponent},
      { path:'pdf' , component: ImagesFiveComponent},
      { path:'shadownet' , component: NotesDataFiveComponent},
      { path:'jonathan' , component: NotesDataFiveComponent},
      { path:'untitled' , component: NotesDataFiveComponent},
      { path:'wcsp' , component: NotesDataFiveComponent},
      { path:'game' , component: NotesDataFiveComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionFiveRoutingModule { }
