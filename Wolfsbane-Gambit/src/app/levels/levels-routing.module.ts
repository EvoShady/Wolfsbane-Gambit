import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternLevelsComponent } from './pattern-levels/pattern-levels.component';
import { PuzzleLevelsComponent } from './puzzle-levels/puzzle-levels.component';

const routes: Routes = [
  {path: 'pattern-levels', component: PatternLevelsComponent, data: {animation: 'pattern-levels'} },
  {path: 'puzzle-levels', component: PuzzleLevelsComponent, data: {animation: 'puzzle-levels'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelsRoutingModule { }
