import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivyaChatFourComponent } from './divya-chat-four/divya-chat-four.component';
import { HomeFootageComponent } from './home-footage/home-footage.component';
import { HomePageFourComponent } from './home-page-four/home-page-four.component';
import { JennyChatFourComponent } from './jenny-chat-four/jenny-chat-four.component';
import { LocalNewsFourComponent } from './local-news-four/local-news-four.component';
import { MessageChatFourComponent } from './message-chat-four/message-chat-four.component';
import { MissionFourComponent } from './mission-four.component';
import { PizzaFourComponent } from './pizza-four/pizza-four.component';
import { RadhikaChatFourComponent } from './radhika-chat-four/radhika-chat-four.component';
import { SmartHomeFourComponent } from './smart-home-four/smart-home-four.component';
import { VishalChatFourComponent } from './vishal-chat-four/vishal-chat-four.component';

const routes: Routes = [
  { path: '', component: MissionFourComponent, 
    children:[
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'home', component:HomePageFourComponent},
      { path:'message', component:MessageChatFourComponent},
      { path:'pizza', component:PizzaFourComponent},
      { path:'smart', component:SmartHomeFourComponent},
      { path:'vishal-chat', component:VishalChatFourComponent},
      { path:'divya-chat', component:DivyaChatFourComponent},
      { path:'jenny-chat', component:JennyChatFourComponent},
      { path:'radhika-chat', component:RadhikaChatFourComponent},
      { path:'news', component:LocalNewsFourComponent},
      { path:'home-footage', component:HomeFootageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionFourRoutingModule { }
