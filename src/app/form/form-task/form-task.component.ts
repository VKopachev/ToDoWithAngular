import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  @Input() disabled;
  @Output() onCreateTask = new EventEmitter<any>();
  @ViewChild('formTaskText') inputForm: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onCreate(){
    let newTaskName = this.inputForm.nativeElement.value;
    if (newTaskName.length > 0){
      this.inputForm.nativeElement.value = "";
      this.onCreateTask.emit(newTaskName);
    }
  }


  cleanInputField(){
    this.inputForm.nativeElement.value = "";
}

}
