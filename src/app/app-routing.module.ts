import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'landing', pathMatch:'full'},
  { path: 'landing', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'one', loadChildren: () => import('./mission-one/mission-one.module').then(m => m.MissionOneModule) },
  { path: 'two', loadChildren: () => import('./mission-two/mission-two.module').then(m => m.MissionTwoModule) },
  { path: 'three', loadChildren: () => import('./mission-three/mission-three.module').then(m => m.MissionThreeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
