import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {
  constructor(
    private db: AngularFirestore,
    private rt: Router,
    private art: ActivatedRoute
  ) { }
  
  

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  async getPatterns(){
    return this.db
    .collection('Patterns')
    .get()
    .toPromise() 
  }

  async getPuzzles(){
    return this.db
    .collection('Puzzles')
    .get()
    .toPromise()
  }

  async goToPatternLevel(param: string){
    this.rt.navigate(['pattern-level',param],{relativeTo: this.art});
  }

  async goToPuzzlesLevel(param: string){
    this.rt.navigate(['puzzle-level',param],{relativeTo: this.art});
  }
  async renderPattern(){
    var id;
    this.art.snapshot.children.map(el=>{
      id=el.paramMap.get('id');
    })
    return this.db
    .collection('Patterns')
    .doc(id)
    .get()
  }

  async renderPuzzle(){
    var id;
    this.art.snapshot.children.map(el=>{
      id=el.paramMap.get('id');
    })
    return this.db
    .collection('Puzzels')
    .doc(id)
    .get()
  }

  goBack2Patterns(){
    this.rt.navigate(['patterns']);
  }
  
  goBack2Puzzles(){
    this.rt.navigate(['puzzles'])
  }
  goBack2Menu(){
    this.rt.navigate(['mainMenu']);
  }
}
