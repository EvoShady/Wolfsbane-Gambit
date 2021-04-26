import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatternLevelsComponent } from './pattern-levels/pattern-levels.component';
import { PuzzleLevelsComponent } from './puzzle-levels/puzzle-levels.component';



@NgModule({
  declarations: [PatternLevelsComponent, PuzzleLevelsComponent],
  imports: [
    CommonModule
  ]
})
export class LevelsModule { }
