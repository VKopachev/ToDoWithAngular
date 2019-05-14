import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToDoService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('usernameForm') usernameForm: ElementRef;
  @ViewChild('passwordForm') passwordForm: ElementRef;
  
  constructor(private service: ToDoService) { }

  ngOnInit() {
  }

  onLogIn(event:any){
    event.preventDefault();
    let username = this.usernameForm.nativeElement.value;
    let password = this.passwordForm.nativeElement.value;
    console.log(username, password);
  }
}
