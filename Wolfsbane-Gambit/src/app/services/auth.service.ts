import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  
  newUser: User

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private rt: Router 
  ) { }

  async login( email: string, password: string) {
    await this.afa.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.rt.navigate(['afterIntro']);
        }
      })
  }

  async createUser(user: User) {
    await this.afa.createUserWithEmailAndPassword(user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        userCredential.user.updateProfile( {
          displayName: user.username
        });

        this.insertUserData()
          .then(() => {
            this.rt.navigate(['afterIntro']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData() {
    return this.afs.doc(`Users/${this.newUser.username}`).set({
      email: this.newUser.email,
      password: this.newUser.password,
      level: 1
    })
  }

  logout(){
    this.afa.signOut();
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
 
  
  
  


}




