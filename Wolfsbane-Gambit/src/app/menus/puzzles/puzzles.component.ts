import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { puzzle } from 'src/app/models/puzzle';
import { LevelsService } from 'src/app/services/levels.service';

@Component({
  selector: 'app-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {
  list: puzzle[]=new Array<puzzle>();
  split_list: puzzle[]=new Array<puzzle>();
  activeLinks: boolean[]=new Array<boolean>();
  split_activeLinks: boolean[]=new Array<boolean>();
  length:number;
  pageSize:number = 8;

  constructor(private lvs: LevelsService) { }
  async populate(){
   await this.lvs.getPuzzles()
    .then(doc=>doc.docs.map((it)=>{
      let temp=it.data() as puzzle;
      temp.id=it.id;
      this.list.push(temp);
      this.activeLinks.push(true);
    }))
    this.length=this.list.length;
    
    let limit=8;
    while(limit<this.length){
      limit =limit+8;
    }
    while(limit>this.length){
        limit--;
        let node={
          priview: "../../../assets/images/questionmark.png",
          code:"",
          title: "comming up"
        }
        this.list.push(node);
        this.activeLinks.push(false);
      }
  }
  
  
  populatePage(event: PageEvent){
    let start=event.pageIndex*8;
    let stop=start+8;
    this.split_list.splice(0,8);//clear list
    this.split_activeLinks.splice(0,8);
    this.split_list=this.list.slice(start,stop);
    this.split_activeLinks=this.activeLinks.slice(start,stop);
  }

  async goToPuzzleLevel(index: number){
    await this.lvs.goToPuzzlesLevel(this.split_list[index].id);
  }


  
  async ngOnInit() {
    await this.populate();
    this.split_list=this.list.slice(0,8);
    this.split_activeLinks=this.activeLinks.slice(0,8);
  }

  goBack(){
    this.lvs.goBack2Menu();
  }

}
