import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { pattern } from 'src/app/models/pattern';


@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {
  list: pattern[]=new Array<pattern>();
  split_list: pattern[]=new Array<pattern>();
  length:number = 20;
  pageSize:number = 8;
  lable:number = 0;
  
 
  constructor() { }
  populate(){
    for(let i=0;i<this.length;i++){
      let node={
        preview: "../../../assets/images/main_theme.jpg",
        description: "ceva descriere",
        url_table: "ceva url"
      }
      this.list.push(node);
    }
    let limit=8;
    while(limit<this.length){
      limit =limit+8;
    }
    while(limit>this.length){
      limit--;
      let node={
        preview: "../../../assets/images/intro-image.jpg",
        description: "ceva descriere",
        url_table: "ceva url"
      }
      this.list.push(node);
    }
  }

  populatePage(event: PageEvent){
    let start=event.pageIndex*8;
    this.lable=start;
    let stop=start+8;
    this.split_list.splice(0,8);
    this.split_list=this.list.slice(start,stop);
    
    
    console.warn(this.split_list);
  }


  
  ngOnInit(): void {
    this.populate();
    this.split_list=this.list.slice(0,8);
    console.warn(this.split_list);

  }

}
