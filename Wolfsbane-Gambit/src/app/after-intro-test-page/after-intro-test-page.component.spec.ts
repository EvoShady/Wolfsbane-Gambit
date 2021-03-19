import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterIntroTestPageComponent } from './after-intro-test-page.component';

describe('AfterIntroTestPageComponent', () => {
  let component: AfterIntroTestPageComponent;
  let fixture: ComponentFixture<AfterIntroTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterIntroTestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterIntroTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
