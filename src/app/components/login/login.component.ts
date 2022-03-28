import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { Login_Det } from 'src/app/angular-material.module';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  faLock= faLock;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.api.LoggedIn()){
      this.router.navigate(['admin']);
      return;
    }
    localStorage.clear();
    // const Name: string;
    this.loginForm = this.formBuilder.group({
      mailid:[''],
      password:['']
    })
    this.matSnackBar.open("Please Do Login to get in",'Thank you', { duration: 4000 });
    // this.loadpost();
  }
  // Login method define localStorage.setItem('token', res.token);

  // Login(){
  //   this.http.post('http://localhost:3000/api/users/login',this.loginForm.value).subscribe((res)=>{
  //     alert(JSON.stringify(res));
  //   })
  Login(){
    this.api.Log_In(this.loginForm.value).subscribe((res)=>{
      // alert(JSON.stringify(res));ks

      if(res.success){
        // Name = res.data;{res.data},
        // alert(JSON.stringify(res));
        this.matSnackBar.open("You are uccessfully Logged In",'Okay', { duration: 4000 });
        this.loginForm.reset();
        this.router.navigate(['admin']);
        localStorage.setItem('token',res.token);
        return;
      }
      else{
        this.matSnackBar.open("Not valid mail id or password",'Okay', { duration: 4000 });
        this.loginForm.reset();
        return;
      }

    },err=>{
      this.matSnackBar.open("something went wrong",'sorry', { duration: 4000 });
      return;
    });
  }
}


