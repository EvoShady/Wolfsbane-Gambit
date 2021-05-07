import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelsRoutingModule } from './levels-routing.module';
import { PatternLevelComponent } from './pattern-level/pattern-level.component';
import { PuzzleLevelComponent } from './puzzle-level/puzzle-level.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PatternLevelComponent, PuzzleLevelComponent],
  imports: [
    CommonModule,
    LevelsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
  ]
})
export class LevelsModule { }
