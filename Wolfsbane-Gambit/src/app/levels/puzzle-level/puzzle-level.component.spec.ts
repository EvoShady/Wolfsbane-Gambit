import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { LevelsService } from 'src/app/services/levels.service';

import { PuzzleLevelComponent } from './puzzle-level.component';

describe('PuzzleLevelComponent', () => {
  let component: PuzzleLevelComponent;
  let lvs: LevelsService, sanitizer: DomSanitizer

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = new PuzzleLevelComponent(lvs, sanitizer)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
