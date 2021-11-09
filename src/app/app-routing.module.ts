import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { QuizComponent } from './shared/components/quiz/quiz.component';
import { StartQuizComponent } from './shared/components/start-quiz/start-quiz.component';

const routes: Routes = [
  {
    path:"landing-page",
    component:LandingPageComponent
  },{
  path:'admin-login',
  component:LoginComponent
},
{
  path:'employee-login',
  component:LoginComponent
},
{
  path: 'app',
  loadChildren: () => import('./sub-app/sub-app.module').then(m => m.SubAppModule)
},
{
path:'',
redirectTo:"landing-page",
pathMatch:"full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
