import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { puzzle } from 'src/app/models/puzzle';
import { LevelsService } from 'src/app/services/levels.service';

@Component({
  selector: 'app-puzzle-level',
  templateUrl: './puzzle-level.component.html',
  styleUrls: ['./puzzle-level.component.css']
})
export class PuzzleLevelComponent implements OnInit {

  puzzle2render:puzzle;
  urlSafe: SafeResourceUrl;
  constructor(
    private lvs: LevelsService,
    public sanitizer: DomSanitizer
  ) { }
  async ngOnInit(){
    await this.lvs.renderPuzzle()
    .then(val=>{
      val.subscribe(p=>{
        this.puzzle2render=p.data() as puzzle;
        this.makeUrl();
      })
    })
  }

  makeUrl(){
    let concat="//www.chess.com/emboard?id=" + this.puzzle2render.code;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(concat);
  }
  goBack(){
    this.lvs.goBack2Puzzles();
  }

}
