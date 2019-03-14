import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ToDoService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  
  @Output() onCreateList = new EventEmitter<any>();
  @ViewChild('formListText') inputForm: ElementRef;

  constructor(private service: ToDoService) { }

  ngOnInit() {
  }

  onCreate(){
    let newListName = this.inputForm.nativeElement.value;
    if (newListName.length > 0){
      this.cleanInputField();
      this.onCreateList.emit(newListName);
    }
  }

  cleanInputField(){
      this.inputForm.nativeElement.value = "";
  }

}
