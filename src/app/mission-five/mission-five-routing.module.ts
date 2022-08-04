import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserFiveComponent } from './browser-five/browser-five.component';
import { CalenderFiveComponent } from './calender-five/calender-five.component';
import { ChatHqFiveComponent } from './chat-hq-five/chat-hq-five.component';
import { HomeScreenFiveComponent } from './home-screen-five/home-screen-five.component';
import { LockScreenFiveComponent } from './lock-screen-five/lock-screen-five.component';
import { MessageChatFiveComponent } from './message-chat-five/message-chat-five.component';
import { MissionFiveComponent } from './mission-five.component';
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionFiveRoutingModule { }
