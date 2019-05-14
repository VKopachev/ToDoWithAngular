import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list;
  @Input() selected;
  @Output() onSelectList = new EventEmitter<any>();
  @Output() onDeleteList = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    if (!this.selected){
      this.onSelectList.emit(this.list.id);
    }
  }

  onDelete() {
    this.onDeleteList.emit(this.list.id);
  }

}
