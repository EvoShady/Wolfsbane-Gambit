import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsService } from 'src/app/services/levels.service';

import { PatternLevelComponent } from './pattern-level.component';

describe('PatternLevelComponent', () => {
  let component: PatternLevelComponent;
  let lvs: LevelsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = new PatternLevelComponent(lvs)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
