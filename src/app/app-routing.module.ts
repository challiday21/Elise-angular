import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CreateMemberComponent } from './pages/create-member/create-member.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageBenevolesComponent } from './pages/page-benevoles/page-benevoles.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageSeniorsComponent } from './pages/page-seniors/page-seniors.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { UpdateMemberComponent } from './pages/update-member/update-member.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent }, // ici on créer une url associée à notre composant PageAccueil
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'admin', component: PageAdminComponent },
  { path: 'seniors', canActivate: [AuthGuard], component: PageSeniorsComponent },
  { path: 'benevoles', component: PageBenevolesComponent },
  { path: 'member', component: CreateMemberComponent },
  { path: 'update', component: UpdateMemberComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }