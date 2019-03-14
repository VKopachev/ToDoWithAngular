import { Component } from '@angular/core';
import { ToDoService } from './to-do-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  lists = [];
  tasks = [];
  currentList = 1;
  disabledTaskForm = false;

  constructor(private service: ToDoService) { 
    this.updateLists();
  }

  listsIsNotEmpty(){
    return this.lists.length>0;
  }

  updateDisableTaskForm(){
    this.disabledTaskForm = !this.listsIsNotEmpty();
  }

  createList(listName:string){
    this.service.createList(listName).subscribe((res:any)=>{
      this.lists.push(res);
      this.changeCurrentList(res.id);
      this.updateDisableTaskForm();
    });
  }

  updateLists(){
    this.service.getLists().subscribe((res:any)=>{
      this.lists = res;
      this.changeFirstList();
      this.updateDisableTaskForm();
    });
  }

  deleteList(listId:number){
    this.service.deleteList(listId).subscribe(()=>{
      this.updateLists();
      this.lists.map(list=>{
        if (list.id == listId){
          this.lists.splice( this.lists.indexOf(list), 1 );
        }
      })
      if (!this.listsIsNotEmpty()){
        this.updateTasks();
      }
      this.updateDisableTaskForm();
    });
  }

  changeFirstList(){
    if (this.listsIsNotEmpty()){
      this.changeCurrentList(this.lists[0].id);
    }
  }

  changeCurrentList(listId:number){
    this.currentList = listId;
    this.updateTasks();
  }

  createTask(tasktext:string){
    this.service.createTask(tasktext, this.currentList)
    .subscribe((res:any)=>{
      this.tasks.push(res);
    });
  }

  updateTasks(){
    this.service.getTasks(this.currentList)
    .subscribe((res:any)=>{
      this.tasks = res;
    });
  }

  deleteTask(taskId:number){
    this.service.deleteTask(taskId)
    .subscribe(()=>{
      this.tasks.map(task=>{
        if (task.id == taskId){
          this.tasks.splice( this.tasks.indexOf(task), 1 );
        }
      })
    });
  }

  editTextTask(task:any){
    this.service.editTextTask(task.id, task.text)
    .subscribe();
  }

  tickOffTask(task:any){
    this.service.tickOffTask(task.id, task.done)
    .subscribe();
  }
}
