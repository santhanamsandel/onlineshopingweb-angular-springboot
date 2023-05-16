import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { UserlistComponent } from './userlist/userlist.component';
import { RegisterComponent } from './register/register.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path:'',component:HomepageComponent},
{path:'homepage',component:HomepageComponent},
{path: 'userlist', component:UserlistComponent},
 {path:"register",component:RegisterComponent},
 {path:"login",component:LoginComponent},
 {path:'update-user/:userId',component:UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
