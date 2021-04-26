import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternLevelsComponent } from './pattern-levels.component';

describe('PatternLevelsComponent', () => {
  let component: PatternLevelsComponent;
  let fixture: ComponentFixture<PatternLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
