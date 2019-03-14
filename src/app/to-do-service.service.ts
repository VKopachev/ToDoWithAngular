import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  baseUrl = "http://localhost:3000/";
  listUrl = this.baseUrl + "lists/";
  taskUrl = this.baseUrl + "tasks/";

  constructor(private http: HttpClient) { 
  }

  createList(listName:string){
    return this.http.post(this.listUrl, {
      name: listName
    });
  }

  getLists(){
    return this.http.get(this.listUrl);
  }

  deleteList(listId:number){
    return this.http.delete(this.listUrl+listId)
  }

  createTask(taskText:string, listId:number){
    return this.http.post(this.taskUrl, {
      text:taskText, 
      done:false, 
      listId:listId
    });
  }

  getTasks(listId:number){
    return this.http.get(this.taskUrl+"?listId="+listId);
  }

  tickOffTask(taskId:number, taskDone:boolean){
    return this.http.patch(this.taskUrl+taskId, {done:taskDone})
  }

  editTextTask(taskId:number, taskText:string){
    return this.http.patch(this.taskUrl+taskId, {text:taskText})
  }

  deleteTask(taskId:number){
    return this.http.delete(this.taskUrl+taskId)
  }

}
