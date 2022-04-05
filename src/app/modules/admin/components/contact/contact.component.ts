import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Database } from 'src/app/angular-material.module';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  logdata!: any[];
  updateForm!: FormGroup;

  constructor(private api: ApiService,
    private matSnackBar:MatSnackBar,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.api.getData().subscribe(data=>{
    this.logdata = data.data;
    // alert(JSON.stringify(data));
    // alert(this.logdata);
    }),(err:any)=>{
      this.matSnackBar.open("Something went wrong could not fetch data",'sorry', { duration: 4000 });
    }
    this.updateForm = this.formBuilder.group({
      mailid:[''],
      password:[''],
      name:[''],
      empid:['']
    });
  }
  // DeleteData(a:Database){
  //   alert(JSON.stringify(a));
  //   alert(a);
  //   console.log(a)
  //   this.api.DeleteData(a).subscribe((res: any)=>{
  //     // alert(JSON.stringify(res));
  //     if(res.success){
  //       this.matSnackBar.open("data deleted successfully successfully",'okay', { duration: 4000 });
  //     }
  //     else{
  //       this.matSnackBar.open("could not process",'okay', { duration: 4000 });

  //     }

  //   },(err:any)=>{
  //     this.matSnackBar.open("something went wrong",'sorry', { duration: 4000 });
  //   });
  // }
  // EditData(id:any){
  //   alert(JSON.stringify(id));
  //   console.log(id)
  // }

}
