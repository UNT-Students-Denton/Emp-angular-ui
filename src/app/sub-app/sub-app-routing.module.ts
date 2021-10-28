import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpolyeeProfileComponent } from "../shared/components/empolyee-profile/empolyee-profile.component";
import { HomeComponent } from "../shared/components/home/home.component";
import { ViewCourseComponent } from "../shared/components/view-course/view-course.component";
import { SubAppComponent } from "./sub-app/sub-app.component";

const routes: Routes = [
  {
  path:'',
  component:SubAppComponent,
  children:[
    {
    path:'home',
    component:HomeComponent,
    },
      {
        path:'view-course',
        component:ViewCourseComponent
      
    },
    {
      path:'profile',
      component:EmpolyeeProfileComponent
    },
{
  path: 'admin',
  loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
}
  ]
  },
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SubAppRoutingModule { }
  