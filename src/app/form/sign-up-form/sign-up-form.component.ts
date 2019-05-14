import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @ViewChild('usernameForm') usernameForm: ElementRef;
  @ViewChild('passwordForm') passwordForm: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onSignUp(){
    console.log(this.usernameForm.nativeElement.value);
    console.log(this.passwordForm.nativeElement.value);
  }

}
