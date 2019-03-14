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
  currentList = 1;

  constructor(private service: ToDoService) { 
    this.updateLists();
  }
  onCreateList(listName:string){
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
  }
}
