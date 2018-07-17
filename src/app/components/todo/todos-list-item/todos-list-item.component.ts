import { Component, OnInit, EventEmitter, ChangeDetectionStrategy, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todos-list-item',
  templateUrl: './todos-list-item.component.html',
  styleUrls: ['./todos-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListItemComponent implements OnInit {
  @Input() todo;

  @Output() created = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() completed = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.todo);
  }

}
