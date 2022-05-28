import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  list: String[] = [];
  listLength : Number = 0;
  filteredText: String[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  add(text: String){
    this.list.push(text);
    this.listLength = this.list.length;
  }

  delete(i: number){
    console.log(i);
    this.list.splice(i,1);
    this.listLength = this.list.length;
  }

  filtered(text: string){
    return this.list.filter(function(ele_val) {
      return ele_val.indexOf(text) !== -1
      }) 
  }

  filter(text:string){
    this.filteredText= this.filtered(text);
  }   


}
