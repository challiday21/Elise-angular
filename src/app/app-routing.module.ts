import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemberComponent } from './pages/create-member/create-member.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageBenevolesComponent } from './pages/page-benevoles/page-benevoles.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageSeniorsComponent } from './pages/page-seniors/page-seniors.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent }, // ici on créer une url associée à notre composant PageAccueil
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'admin', component: PageAdminComponent },
  { path: 'seniors', component: PageSeniorsComponent },
  { path: 'benevoles', component: PageBenevolesComponent },
  { path: 'member', component: CreateMemberComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }