import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject, observable, Observable } from 'rxjs';
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

  private email;
  
  async login(password: string) {
    await this.afa.signInWithEmailAndPassword(this.email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.rt.navigate(['mainMenu']);
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
            this.rt.navigate(['login']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData() {
    return this.afs.doc(`Users/${this.newUser.username}`).set({
      username: this.newUser.username,
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

  goToLogin(){
    this.rt.navigate(['login'])
  }

  goToRegister(){
    this.rt.navigate(['register'])
  }
 
  
  private async getEmailbyUsername(name: string):Promise<String>{
    var docRef= this.afs.collection('Users').doc(name);
    var exist=true;
    var res:Promise<string>;
    await docRef.ref.get()
       .then((doc)=>{
         res=doc.get('email');
      }) 
    return res;
  }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  userAlreadyExistValidor(username: string){
    return (formGrop: FormGroup)=>{
      const usernameControl=formGrop.controls[username];
      if(!usernameControl){
        return null;
      }
      if(usernameControl.errors && usernameControl.errors.uae){
        return null;
      }
      var temp;
      this.getEmailbyUsername(usernameControl.value)
      .then(res=>{
        if(typeof(res)=="undefined"){
          usernameControl.setErrors(null);
        }else{
          usernameControl.setErrors({uae:true})
        }
      })
    }
  }

  unknownUser(username:string){
    return (formGrop: FormGroup)=>{
      const usernameControl=formGrop.controls[username];
      if(!usernameControl){
        return null;
      }
      if(usernameControl.errors && usernameControl.errors.uu){
        return null;
      }
      var temp;
      this.getEmailbyUsername(usernameControl.value)
      .then(res=>{
        if(typeof(res)=="undefined"){
          usernameControl.setErrors({uu:true})
        }else{
          usernameControl.setErrors(null);
          this.email=res;
        }
      })
    }
  }
  
  
  


}




