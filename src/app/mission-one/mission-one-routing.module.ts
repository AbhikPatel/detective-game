import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionOneComponent } from './mission-one.component';

const routes: Routes = [{ path: '', component: MissionOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionOneRoutingModule { }
