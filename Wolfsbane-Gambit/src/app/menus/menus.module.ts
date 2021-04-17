import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { PatternsComponent } from './patterns/patterns.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [PatternsComponent, PuzzlesComponent],
  imports: [
    CommonModule,
    MenusRoutingModule, 
    MatCardModule
  ]
})
export class MenusModule { }
