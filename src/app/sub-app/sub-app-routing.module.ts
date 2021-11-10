import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpolyeeProfileComponent } from "../shared/components/empolyee-profile/empolyee-profile.component";
import { HomeComponent } from "../shared/components/home/home.component";
import { QuizComponent } from "../shared/components/quiz/quiz.component";
import { StartQuizComponent } from "../shared/components/start-quiz/start-quiz.component";
import { ViewCourseComponent } from "../shared/components/view-course/view-course.component";
import { SubAppComponent } from "./sub-app/sub-app.component";
import { ViewScoreComponent } from "../shared/components/view-score/view-score.component";
import { CertificateComponent } from "../shared/components/certificate/certificate.component";

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
        path:'view-score',
        component:ViewScoreComponent
      
    },
    {
      path:'certificate',
      component : CertificateComponent
    },
    {
      path:'quiz',
      component:QuizComponent
    },
    {
      path:'start-quiz',
      component: StartQuizComponent
    },
    {
      path:'profile',
      component:EmpolyeeProfileComponent
    },
    {
      path:'profile/:id',
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
  