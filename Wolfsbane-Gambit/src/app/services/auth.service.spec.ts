import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let afa: AngularFireAuth, afs: AngularFirestore, rt: Router 

  beforeEach(() => {
    service = new AuthService(afa,afs,rt)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
