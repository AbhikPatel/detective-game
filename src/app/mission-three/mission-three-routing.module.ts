import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinGuard } from './service/pin.guard';
import { GalleryThreeComponent } from './gallery-three/gallery-three.component';
import { HomePageThreeComponent } from './home-page-three/home-page-three.component';
import { KhusiChatThreeComponent } from './khusi-chat-three/khusi-chat-three.component';
import { MessageChatThreeComponent } from './message-chat-three/message-chat-three.component';
import { MilanChatThreeComponent } from './milan-chat-three/milan-chat-three.component';
import { MissionThreeComponent } from './mission-three.component';
import { MonicaChatThreeComponent } from './monica-chat-three/monica-chat-three.component';
import { ParentsChatThreeComponent } from './parents-chat-three/parents-chat-three.component';
import { PhoneCallThreeComponent } from './phone-call-three/phone-call-three.component';
import { PinCodeComponent } from './pin-code/pin-code.component';

const routes: Routes = [
  { path: '', component: MissionThreeComponent,
    children:[
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'home', component:HomePageThreeComponent},
      { path:'call', component:PhoneCallThreeComponent},
      { path:'message', component:MessageChatThreeComponent},
      { path:'chat-parents', component:ParentsChatThreeComponent},
      { path:'chat-milan', component:MilanChatThreeComponent},
      { path:'chat-khusi', component:KhusiChatThreeComponent},
      { path:'chat-monica', component:MonicaChatThreeComponent},
      { path:'pin-code', component:PinCodeComponent},
      { path:'gallery',canActivate:[PinGuard] ,component:GalleryThreeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionThreeRoutingModule { }
