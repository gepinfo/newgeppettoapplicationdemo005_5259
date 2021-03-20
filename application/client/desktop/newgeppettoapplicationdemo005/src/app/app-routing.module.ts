import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'createuser', loadChildren: () => import('./createuser/createuser.module').then(m => m.CreateuserModule), canActivate: [AuthGuard] } , 
{ path : 'getallusers', loadChildren: () => import('./getallusers/getallusers.module').then(m => m.GetallusersModule), canActivate: [AuthGuard] } , 
{ path : 'createproject', loadChildren: () => import('./createproject/createproject.module').then(m => m.CreateprojectModule), canActivate: [AuthGuard] } , 
{ path : 'getallprojects', loadChildren: () => import('./getallprojects/getallprojects.module').then(m => m.GetallprojectsModule), canActivate: [AuthGuard] } , 
{ path : 'createmanager', loadChildren: () => import('./createmanager/createmanager.module').then(m => m.CreatemanagerModule), canActivate: [AuthGuard] } , 
{ path : 'createlead', loadChildren: () => import('./createlead/createlead.module').then(m => m.CreateleadModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
