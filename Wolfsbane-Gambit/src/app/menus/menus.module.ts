import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { PatternsComponent } from './patterns/patterns.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PatternsComponent, PuzzlesComponent],
  imports: [
    CommonModule,
    MenusRoutingModule, 
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
  ]
})
export class MenusModule { }
