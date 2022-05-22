import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodos: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First To Do",
        completed: false
      },
      {
        content: "Second To Do",
        completed: false
      },
    ]
  }

  toggleDone (id: number) {
    this.todos.map((todo, index) => {
      if(id === index) todo.completed = !todo.completed;
      return todo;
    })
  }

  deleteToDo(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id);
  }

  addToDo() {
    if(this.inputTodos !== ""){
      this.todos.push(
        {
          content: this.inputTodos,
          completed: false,
        }
      )
      this.inputTodos = "";
    }
  }
}
