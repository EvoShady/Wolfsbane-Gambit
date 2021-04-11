import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuPageComponent } from './main-menu-page.component';

const routes: Routes = [
  { path: 'temp', component: MainMenuPageComponent, data: {animation: 'mainMenu'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuPageRoutingModule { }