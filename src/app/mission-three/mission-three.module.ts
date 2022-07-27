import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionThreeRoutingModule } from './mission-three-routing.module';
import { MissionThreeComponent } from './mission-three.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageThreeComponent } from './home-page-three/home-page-three.component';
import { MessageChatThreeComponent } from './message-chat-three/message-chat-three.component';
import { GalleryThreeComponent } from './gallery-three/gallery-three.component';
import { ParentsChatThreeComponent } from './parents-chat-three/parents-chat-three.component';
import { KhusiChatThreeComponent } from './khusi-chat-three/khusi-chat-three.component';
import { MilanChatThreeComponent } from './milan-chat-three/milan-chat-three.component';
import { MonicaChatThreeComponent } from './monica-chat-three/monica-chat-three.component';
import { PhoneCallThreeComponent } from './phone-call-three/phone-call-three.component';
import { PinCodeComponent } from './pin-code/pin-code.component';
import { PincodeService } from './service/pincode.service';


@NgModule({
  declarations: [
    MissionThreeComponent,
    HomePageThreeComponent,
    MessageChatThreeComponent,
    GalleryThreeComponent,
    ParentsChatThreeComponent,
    KhusiChatThreeComponent,
    MilanChatThreeComponent,
    MonicaChatThreeComponent,
    PhoneCallThreeComponent,
    PinCodeComponent
  ],
  imports: [
    CommonModule,
    MissionThreeRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    PincodeService
  ]
})
export class MissionThreeModule { }
