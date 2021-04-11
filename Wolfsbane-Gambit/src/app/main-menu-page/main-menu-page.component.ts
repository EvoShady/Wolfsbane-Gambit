import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../services/main-menu.service'

@Component({
  selector: 'app-main-menu-page',
  templateUrl: './main-menu-page.component.html',
  styleUrls: ['./main-menu-page.component.css']
})
export class MainMenuPageComponent implements OnInit{

  ngOnInit(): void { }
  
  constructor(
    private mainMenu: MainMenuService
  ) { }

  goToPuzzles(){
    this.mainMenu.goToPuzzles();
    }
    
    goToPatterns(){
    this.mainMenu.goToPatterns();
    }
    
    goToLoginAfterLogOut(){
    this.mainMenu.goToLoginAfterLogOut();
    }

}
