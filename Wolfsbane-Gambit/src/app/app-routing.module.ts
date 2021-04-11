import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component'
import { IntroPageComponent } from './intro-page/intro-page.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'introPage', component: IntroPageComponent},
  { path: 'mainMenu', component: MainMenuPageComponent, data: {animation: 'mainMenu'}},
  { path: 'login', component: LoginComponent, data: {animation: 'login'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
