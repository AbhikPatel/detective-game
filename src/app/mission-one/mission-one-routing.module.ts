import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadChatOneComponent } from './dad-chat-one/dad-chat-one.component';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { MessageChatOneComponent } from './message-chat-one/message-chat-one.component';
import { MissionOneComponent } from './mission-one.component';
import { MomChatOneComponent } from './mom-chat-one/mom-chat-one.component';

const routes: Routes = [
  { path: '', component: MissionOneComponent,
    children:[
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'home', component:HomePageOneComponent },
      { path:'message', component:MessageChatOneComponent },
      { path:'chat-dad', component:DadChatOneComponent },
      { path:'chat-mom', component:MomChatOneComponent },
      { path:'gallery', component:GalleryOneComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionOneRoutingModule { }
