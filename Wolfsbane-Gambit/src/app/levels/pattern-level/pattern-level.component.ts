import { Component, OnInit } from '@angular/core';
import { pattern } from 'src/app/models/pattern';
import { LevelsService } from 'src/app/services/levels.service';

@Component({
  selector: 'app-pattern-level',
  templateUrl: './pattern-level.component.html',
  styleUrls: ['./pattern-level.component.css']
})
export class PatternLevelComponent implements OnInit {
  pattern2render: pattern;
  constructor(
    private lvs: LevelsService
  ) { }
  async ngOnInit(){
    await this.lvs.renderPattern()
    .then(val=>{
      val.subscribe(p=>{
        this.pattern2render=p.data() as pattern;
      }) 
    })
  }

}
