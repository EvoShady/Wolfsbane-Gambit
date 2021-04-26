import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatternLevelsComponent } from './pattern-levels/pattern-levels.component';
import { PuzzleLevelsComponent } from './puzzle-levels/puzzle-levels.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LevelsRoutingModule } from './levels-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PatternLevelsComponent, PuzzleLevelsComponent],
  imports: [
    CommonModule,
    LevelsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class LevelsModule { }
