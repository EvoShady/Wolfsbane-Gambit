import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { PatternsComponent } from './patterns/patterns.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';


@NgModule({
  declarations: [PatternsComponent, PuzzlesComponent],
  imports: [
    CommonModule,
    MenusRoutingModule
  ]
})
export class MenusModule { }
