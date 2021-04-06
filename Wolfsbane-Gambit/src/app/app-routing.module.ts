import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component'
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'introPage', component: IntroPageComponent},
  { path : 'mainMenu', component: MainMenuPageComponent, data: {animation: 'mainMenu'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
