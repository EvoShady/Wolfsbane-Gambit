import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsService } from 'src/app/services/levels.service';

import { PuzzlesComponent } from './puzzles.component';

describe('PuzzlesComponent', () => {
  let puzzleComponent: PuzzlesComponent
  let lvs: LevelsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    puzzleComponent = new PuzzlesComponent(lvs)
  });

  it('should create', () => {
    expect(puzzleComponent).toBeTruthy();
  });
});
