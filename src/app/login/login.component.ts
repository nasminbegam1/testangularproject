import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup,  Validators ,  FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
    	email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    });
  }

  loginFormSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.router.navigate(['/customer'])
    }
  }

}
