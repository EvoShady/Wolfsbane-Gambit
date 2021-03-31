import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  userForm: FormGroup;
  hide=true;
  constructor(
    private auth: AuthService
  ) { }
  
  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe(data=>{
      console.error(data);
    })
    this.userForm=new FormGroup({
      username: new FormControl("", [Validators.required,Validators.minLength(4),Validators.maxLength(25)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(8),Validators.maxLength(50)])
    })

  }
  getUsernameErrors(){
    if(this.userForm.get('username').hasError('required')){
      return 'This field is required'
    }
    if(this.userForm.get('username').hasError('minlength')){
      return 'Username must be at least 4 charaters'
    }
    if(this.userForm.get('username').hasError('maxlength')){
      return 'Username must be at most 25 characters'
    }
    return '';
  }
  getEmailErrors(){
    if(this.userForm.get('email').hasError('required')){
      return 'This field is required'
    }
    if(this.userForm.get('email').hasError('email')){
      return 'Email bad fromatted'
    }
    return '';
  }

  getPasswordErrors(){
    if(this.userForm.get('password').hasError('required')){
      return 'This field is required'
    }
    if(this.userForm.get('password').hasError('minlength')){
      return 'Password must be at least 4 charaters'
    }
    if(this.userForm.get('password').hasError('maxlength')){
      return 'Password must be at most 50 characters'
    }
    return '';
  }
  
  async createUser(){
    await this.auth.createUser(this.userForm.value);
  }
  
  goToLogin(){
    this.auth.goToLogin()
  }
 

  



}
