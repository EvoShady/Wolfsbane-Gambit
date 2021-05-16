import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternsComponent } from './patterns/patterns.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';

const routes: Routes = [
  {path: 'patterns', component: PatternsComponent, data: {animation: 'patterns'} },
  {path: 'puzzles', component: PuzzlesComponent, data: {animation: 'puzzles'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
