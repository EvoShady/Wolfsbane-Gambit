import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

import { PuzzlesComponent } from './puzzles.component';

describe('PuzzlesComponent', () => {

  let component: PuzzlesComponent;
  let fixture: ComponentFixture<PuzzlesComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;


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
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(PuzzlesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('h1'));
    htmlElement = debugElement.nativeElement;
  });

  it('should display "Checkmate Puzzles"', () => {
    expect(htmlElement.textContent).toEqual('Checkmate Puzzles');
  });
});
