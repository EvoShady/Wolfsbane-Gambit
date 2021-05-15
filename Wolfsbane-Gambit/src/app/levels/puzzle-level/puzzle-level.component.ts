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

  boardId = "8011345"
  puzzleTitle = "Titlu"
  url: string = "//www.chess.com/emboard?id=8011345";

  urlSafe: SafeResourceUrl;

  pattern2render: pattern;
  constructor(
    private lvs: LevelsService,
    public sanitizer: DomSanitizer
  ) { }
  async ngOnInit(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    await this.lvs.renderPattern()
    .then(val=>{
      val.subscribe(p=>{
        this.pattern2render=p.data() as pattern;
      }) 
    })
  }
  goBack(){
    this.lvs.goBack2Patterns();
  }

}
