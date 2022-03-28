import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private matSnackBar: MatSnackBar,
    private api: ApiService) { }

  ngOnInit(): void {
  }
  logout(): void{
    this.api.logout();
    this.matSnackBar.open("You are successfully logged out",'Dismiss', { duration: 4000 });
  }
}
