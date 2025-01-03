import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowpostComponent } from './showpost/showpost.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegComponent } from './reg/reg.component';
import { EnterComponent } from './enter/enter.component';
import { AuthguardGuard } from './authguard.guard';
import { Authguard1Guard } from './authguard1.guard';

const routes: Routes = [{
  path:'posts',
  component:ShowpostComponent
},
{
  path:'',
  component:HomeComponent,
  canActivate:[Authguard1Guard]
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegComponent
},
{
  path:'home',
  component:EnterComponent,
  canActivate:[AuthguardGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
