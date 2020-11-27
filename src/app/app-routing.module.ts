import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SignonformComponent } from './signonform/signonform.component';
import { TestComponent } from './test/test.component';
import {AuthGuard} from './guards/auth.guard'
import { RegisterStudentComponent } from './student/register-student/register-student.component';
import { MygridComponent } from './mygrid/mygrid.component';


const routes:Routes=[
  //basic routes
 
  {path:'login',component:SignonformComponent},
  
    { 
    path: 'dashboard',canActivate:[AuthGuard],
    component: DashboardComponent,
    children : [
        { path: 'main', component: TestComponent  },
        { path: 'first', component: FirstComponent },
        { path: 'StudentMod',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
          }
        
        
        
    ]
},
{path:'',redirectTo:'login',pathMatch:'full'}
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
