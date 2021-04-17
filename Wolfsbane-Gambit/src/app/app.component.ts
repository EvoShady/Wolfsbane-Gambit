import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fader } from './route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
  ]
})
export class AppComponent implements OnInit{
  title = 'Wolfsbane-Gambit';
  
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  constructor(private router: Router) {}

  ngOnInit(){
  //    this.router.navigate(['introPage']);
  //   setTimeout(() => {
  //   this.router.navigate(['login']);
  //  }, 5500)
  this.router.navigate(['mainMenu'])

  }
}