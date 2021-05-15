import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsService } from 'src/app/services/levels.service';

import { PatternsComponent } from './patterns.component';

describe('PatternsComponent', () => {
  let patternComponent: PatternsComponent;
  let lvs: LevelsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    patternComponent = new PatternsComponent(lvs)
  });

  it('should create', () => {
    expect(patternComponent).toBeTruthy();
  });
});
