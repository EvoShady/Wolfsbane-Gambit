import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternLevelComponent } from './pattern-level.component';

describe('PatternLevelComponent', () => {
  let component: PatternLevelComponent;
  let fixture: ComponentFixture<PatternLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
