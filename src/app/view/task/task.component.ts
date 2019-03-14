import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  isEdit = false;
  @Input() task;
  @Output() onTickOff = new EventEmitter<any>();
  @Output() onEditTextTask = new EventEmitter<any>();
  @Output() onDeleteTask = new EventEmitter<any>();
  @ViewChild('taskTextInput') inputText: ElementRef;

  ngOnInit() {
  }

  onDone(){
    this.task.done = !this.task.done;
    this.onTickOff.emit({id:this.task.id, done:this.task.done});
  }
  
  switchStateText(){
    this.isEdit = !this.isEdit;
    if (this.isEdit){
      setTimeout(
        ()=>{this.inputText.nativeElement.focus()},
        0
      );
    } else if (this.inputText.nativeElement.value.length == 0){
      this.inputText.nativeElement.value = this.task.text;
    }
  }

  onChangeText(){
    let inputField = this.inputText.nativeElement.value;
    if (inputField.length > 0 && this.task.text != inputField){
      this.task.text = inputField;
      this.onEditText();
    } else {
      this.inputText.nativeElement.value = this.task.text;
    }
  }
  
  onEditText(){
    this.switchStateText();
    console.log("edit text", this.task.text);
    this.onEditTextTask.emit({id:this.task.id, text:this.task.text});
  }

  onDelete(){
    this.onDeleteTask.emit(this.task.id);
  }

}
