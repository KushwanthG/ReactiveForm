import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private ts:TodoService){

  }

taskInput=''

addTask(){
  this.ts.addTodo(this.taskInput)
  this.taskInput=""

}

restForm(){
    this.taskInput=""
}
}
