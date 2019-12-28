import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: string;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
