import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterIntroTestPageComponent } from './after-intro-test-page/after-intro-test-page.component'
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'introPage', component: IntroPageComponent},
  { path : 'afterIntro', component: AfterIntroTestPageComponent, data: {animation: 'afterIntro'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
