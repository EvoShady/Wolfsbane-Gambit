import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MainMenuService } from './main-menu.service';

describe('MainMenuService', () => {
  let service: MainMenuService
  let router: Router
  let auth: AuthService

  beforeEach(async() => {
    service = new MainMenuService(router,auth)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
