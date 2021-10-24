import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../shared/components/home/home.component";
import { SubAppComponent } from "./sub-app/sub-app.component";

const routes: Routes = [
  {
  path:'',
  component:SubAppComponent,
  children:[
    {
    path:'home',
    component:HomeComponent
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
  