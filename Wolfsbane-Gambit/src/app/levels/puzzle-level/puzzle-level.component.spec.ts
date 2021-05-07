import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleLevelComponent } from './puzzle-level.component';

describe('PuzzleLevelComponent', () => {
  let component: PuzzleLevelComponent;
  let fixture: ComponentFixture<PuzzleLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
