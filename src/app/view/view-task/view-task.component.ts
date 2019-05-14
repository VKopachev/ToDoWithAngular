import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  @Input() tasks;
  @Output() onTickOffTask = new EventEmitter<any>();
  @Output() onEditTextTask = new EventEmitter<any>();
  @Output() onDeleteTask = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTickOff(task: any) {
    this.onTickOffTask.emit(task);
  }

  onEditText(task: any) {
    this.onEditTextTask.emit(task);
  }

  onDelete(taskId: number) {
    this.onDeleteTask.emit(taskId);
  }

}
