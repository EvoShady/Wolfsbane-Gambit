import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { By } from 'protractor';
import { LevelsService } from 'src/app/services/levels.service';
import { environment } from 'src/environments/environment';

import { PatternsComponent } from './patterns.component';

describe('PatternsComponent', () => {
  let patternComponent: PatternsComponent;
  let lvs: LevelsService
  let component: PatternsComponent;
  let fixture: ComponentFixture<PatternsComponent>;
 
  

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterModule.forRoot([]),
      ],
      providers: [ ]
    }).compileComponents();

    fixture = TestBed.createComponent(PatternsComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    patternComponent = new PatternsComponent(lvs)
  });

  it('should create', () => {
    expect(patternComponent).toBeTruthy();
  });

  it('should contain false value',async ()=>{
    component.length=8;
    await component.populate();
    expect(component.activeLinks).toContain(false);
  })
});
