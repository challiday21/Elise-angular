import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    FooterComponent,
    PageSignInComponent,
    PageAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
