import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoListState, TodoState } from '../../../store/todo/todo.state';
import { Observable } from 'rxjs';
import * as TodoAction from '../../../store/todo/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private store: Store<TodoListState>) { }

  todoListState$: Observable<TodoState[]>;

  ngOnInit() {
    this.todoListState$ = this.store.select(state => state.todos);
    this.store.dispatch(new TodoAction.GetTodos());
  }

}
