import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

import { LevelsService } from './levels.service';

describe('LevelsService', () => {
  let service: LevelsService;
  let db: AngularFirestore, rt: Router, patternActiveRoute:ActivatedRoute, puzzleActiveRoute:ActivatedRoute

  beforeEach(async () => {
    service = new LevelsService(db,rt,patternActiveRoute,puzzleActiveRoute)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
