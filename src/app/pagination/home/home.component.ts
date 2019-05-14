import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/to-do-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists = [];
  tasks = [];

  constructor(
    private service: ToDoService) { }

  ngOnInit() {
    this.updatePreviewPage();
  }

  getTasksByList(listId: number) {
    return this.tasks.filter(task=>task.listId==listId);
  }

  createList(listName: string) {
    this.service.createList(listName).subscribe((res: any)=>{
      console.log(res);
      this.lists.push(res);
    });
  }

  updatePreviewPage() {
    this.service.getLists().subscribe((res: any)=>{
      console.log(res);
      this.lists = res;
      this.lists.forEach(list=>{
        this.service.getListPreview(list.id).subscribe((res: any)=>{
          console.log(res);
          this.tasks = this.tasks.concat(res);
        })
      });
    });
  }
}
