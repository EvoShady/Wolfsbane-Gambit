import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMenuService } from '../services/main-menu.service';

import { MainMenuPageComponent } from './main-menu-page.component';

describe('MainMenuPageComponent', () => {
  let component: MainMenuPageComponent;
  let mainMenuService: MainMenuService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = new MainMenuPageComponent(mainMenuService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
