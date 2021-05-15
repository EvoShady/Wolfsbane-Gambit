import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { pattern } from 'src/app/models/pattern';
import { LevelsService } from 'src/app/services/levels.service';

@Component({
  selector: 'app-puzzle-level',
  templateUrl: './puzzle-level.component.html',
  styleUrls: ['./puzzle-level.component.css']
})
export class PuzzleLevelComponent implements OnInit {

  boardId:string;
  puzzleTitle:string;
 
  urlSafe: SafeResourceUrl;

  pattern2render: pattern;
  constructor(
    private lvs: LevelsService,
    public sanitizer: DomSanitizer
  ) { }
  async ngOnInit(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.makeUrl());
    await this.lvs.renderPattern()
    .then(val=>{
      val.subscribe(p=>{
        this.pattern2render=p.data() as pattern;
      }) 
    })
  }

  makeUrl():string{
    return "//www.chess.com/emboard?id="+this.boardId;
  }
  goBack(){
    this.lvs.goBack2Patterns();
  }

}
