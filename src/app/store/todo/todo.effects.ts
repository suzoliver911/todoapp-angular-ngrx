import {catchError, map, mergeMap} from 'rxjs/internal/operators';
import { TodoState } from './todo.state';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as TodoActions from './todo.action';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TodoEffects {

  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
    GetTodos$: Observable<Action> = this.actions$.
      ofType<TodoActions.GetTodos>(TodoActions.GET_TODOS)
      .mergeMap(action =>
        this.http.get(environment.client.base_url + '/api/todos')
          .map((data: Response) => {
            console.log(data);
            return new TodoActions.GetTodosSuccess(data['data']['docs'] as TodoState[]);
          })
          .catchError(() => of(new TodoActions.GetTodoError()))
      );


}

