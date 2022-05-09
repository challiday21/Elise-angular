import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent }, // ici on créer une url associée à notre composant PageAccueil
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'admin', component: PageAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }