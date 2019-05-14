import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  @Input() lists;
  @Input() currentList;
  @Output() changeCurrentList = new EventEmitter<any>();
  @Output() deleteList = new EventEmitter<any>();

  constructor(private service:ToDoService) { 
  }

  ngOnInit() {
}

  isSelect(listId: number){
    return this.currentList == listId;
  }

  changeList(listId: number) {
    this.changeCurrentList.emit(listId);
  }

  onDeleteList(listId: number) {
    this.deleteList.emit(listId);
  }
}
