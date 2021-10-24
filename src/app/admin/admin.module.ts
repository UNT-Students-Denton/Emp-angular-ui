import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'',
      component:EmployeesComponent
    }
  ]
},
];

@NgModule({
  declarations: [
    AdminComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ]
})
export class AdminModule { }
