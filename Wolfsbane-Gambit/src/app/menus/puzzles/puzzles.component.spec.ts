import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

import { PuzzlesComponent } from './puzzles.component';

describe('PuzzlesComponent', () => {

  let component: PuzzlesComponent;
  let fixture: ComponentFixture<PuzzlesComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let rt: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterModule.forRoot([]),
      ],
      declarations: [AppComponent],
      providers: [ ]
    }).compileComponents();

    fixture = TestBed.createComponent(PuzzlesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('h1'));
    htmlElement = debugElement.nativeElement;
  });

  it('should display correct headers', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h1')[0].textContent).toContain('Checkmate Puzzle');
    expect(compiled.querySelectorAll('h1')[1].textContent).toContain('Page');
  });

  it('should display correct button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('button')[0].textContent).toContain('<< Back');
  });

  it('should define ng-teamplate', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('ng-template')).toBeDefined();
  });

  it('length should be undefined if uninitialised', () => {
    expect(component.length).toEqual(undefined);
  });

  it('should always display maximum 8 elements',() => {
    component.populate();
    expect(component.split_list.length).toBeLessThan(9);
  })  

});
