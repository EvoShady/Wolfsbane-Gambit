import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternLevelComponent } from './pattern-level/pattern-level.component';
import { PuzzleLevelComponent } from './puzzle-level/puzzle-level.component';

const routes: Routes = [
  {path: 'pattern-level/:id', component: PatternLevelComponent, data: {animation: 'pattern-level/:id'}},
  {path: 'puzzle-level/:id', component: PuzzleLevelComponent, data: {animation: 'puzzle-level/:id'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelsRoutingModule { }
