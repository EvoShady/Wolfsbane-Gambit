import { Injectable } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
  })
export class MainMenuService {
    constructor(private router: Router,
      private auth: AuthService,) {}

prepareRoute(outlet: RouterOutlet){
return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

goToPuzzles(){
this.router.navigate(['temp']);
}

goToPatterns(){
this.router.navigate(['temp']);
}

goToLoginAfterLogOut(){
this.auth.logout();
this.router.navigate(['login']);
}
}  