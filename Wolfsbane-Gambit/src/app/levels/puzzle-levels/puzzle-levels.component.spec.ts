import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleLevelsComponent } from './puzzle-levels.component';

describe('PuzzleLevelsComponent', () => {
  let component: PuzzleLevelsComponent;
  let fixture: ComponentFixture<PuzzleLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
