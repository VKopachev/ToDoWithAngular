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

  constructor(private service: ToDoService) { 
    this.updateLists();
    this.updateTasks();
  }
  createList(listName:string){
    this.service.createList(listName).subscribe((res:any)=>{
      this.lists.push(res);
      this.currentList = res.id;
    });
  }

  updateLists(){
    this.service.getLists().subscribe((res:any)=>{
      this.lists = res;
    });
  }

  deleteList(listId:number){
    this.service.deleteList(listId).subscribe(()=>{
      this.updateLists();
    });
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
      this.updateTasks();
    });
  }

  editTextTask(task:any){
    this.service.editTextTask(task.id, task.text)
    .subscribe(()=>{
      this.updateTasks();
    });
  }

  tickOffTask(task:any){
    this.service.tickOffTask(task.id, task.done)
    .subscribe(()=>{
      this.updateTasks();
    })
  }
}
