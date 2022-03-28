import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    AdminDashboardComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
  ]
})
export class AdminModule { }
