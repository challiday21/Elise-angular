import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmCreateUserComponent } from './pages/confirm-create-user/confirm-create-user.component';
import { CreateMemberComponent } from './pages/create-member/create-member.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageBenevolesComponent } from './pages/page-benevoles/page-benevoles.component';
import { PageLogoutComponent } from './pages/page-logout/page-logout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageSeniorsComponent } from './pages/page-seniors/page-seniors.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { UpdateMemberComponent } from './pages/update-member/update-member.component';

const routes: Routes = [
  { path: '', component: PageSignInComponent }, // ici on créer une url associée à notre composant PageAccueil
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'logout', component: PageLogoutComponent },
  { path: 'admin', canActivate: [AuthGuard], component: PageAdminComponent },
  { path: 'seniors', canActivate: [AuthGuard], component: PageSeniorsComponent },
  { path: 'benevoles', canActivate: [AuthGuard], component: PageBenevolesComponent },
  { path: 'member', canActivate: [AuthGuard], component: CreateMemberComponent },
  // { path: 'update', canActivate: [AuthGuard], component: UpdateMemberComponent },
  { path: 'update-member/:_id-update-member', canActivate: [AuthGuard], component: UpdateMemberComponent },
  { path: 'confirm-new-member', canActivate: [AuthGuard], component: ConfirmCreateUserComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }