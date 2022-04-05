import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Signup_Det } from 'src/app/angular-material.module';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      mailid:[''],
      password:[''],
      name:[''],
      empid:['']
    });
  }
  Signup(){
    this.api.Sign_Up(this.signupForm.value).subscribe((res: Signup_Det)=>{
      // alert(JSON.stringify(res));
      this.matSnackBar.open("Your data registered successfully",'Okay', { duration: 4000 });
      alert("You have registered successfully");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },(err:any)=>{
      this.matSnackBar.open("Not valid try again later",'sorry', { duration: 4000 });
    });
    this.signupForm.reset();
  }
}
