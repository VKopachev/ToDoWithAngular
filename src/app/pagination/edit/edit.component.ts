import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  lists = [];
  tasks = [];
  currentList = 1;
  disabledTaskForm = false;
  
  constructor(private service: ToDoService, 
    private route: ActivatedRoute,
    private router: Router) { 
    this.updateLists();
    let id = Number.parseInt(this.route.snapshot.paramMap.get("id"));
    if(isNaN(id)){
      this.toHome();
    } else {
      this.changeCurrentList(id);
    }
    
  }

  ngOnInit() {
    this.updateLists();
  }

  toHome() {
    this.router.navigate(['/']);
  }


  listsIsNotEmpty() {
    return this.lists.length>0;
  }

  updateDisableTaskForm() {
    this.disabledTaskForm = !this.listsIsNotEmpty();
  }

  createList(listName: string) {
    this.service.createList(listName).subscribe((res: any)=>{
      this.lists.push(res);
      this.changeCurrentList(res.id);
      this.updateDisableTaskForm();
    });
  }

  updateLists() {
    this.service.getLists().subscribe((res: any)=>{
      this.lists = res;
      this.updateDisableTaskForm();
    });
  }

  deleteList(listId: number) {
    console.log("del ", listId);
    this.service.deleteList(listId).subscribe(()=>{
      this.lists.map(list=>{
        if (list.id == listId){
          this.lists.splice( this.lists.indexOf(list), 1 );
        }
      })
      this.changeFirstList();
      if (!this.listsIsNotEmpty()){
        this.updateTasks();
      }
      this.updateDisableTaskForm();
    });
  }

  changeFirstList() {
    if (this.listsIsNotEmpty()) {
      this.changeCurrentList(this.lists[0].id);
    } else {
      this.toHome();
    }
  }

  changeCurrentList(listId: number) {
    this.router.navigate(['/list/'+listId]);
    this.currentList = listId;
    this.updateTasks();
  }

  createTask(tasktext: string) {
    this.service.createTask(tasktext, this.currentList)
    .subscribe((res: any)=>{
      this.tasks.push(res);
    });
  }

  updateTasks() {
    this.service.getTasks(this.currentList)
    .subscribe((res: any)=>{
      this.tasks = res;
    });
  }

  deleteTask(taskId: number) {
    this.service.deleteTask(taskId)
    .subscribe(()=>{
      this.tasks.map(task=>{
        if (task.id == taskId){
          this.tasks.splice( this.tasks.indexOf(task), 1 );
        }
      })
    });
  }

  editTextTask(task: any) {
    this.service.editTextTask(task.id, task.text)
    .subscribe();
  }

  tickOffTask(task: any) {
    this.service.tickOffTask(task.id, task.done)
    .subscribe();
  }
}
