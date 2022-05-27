import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageSeniorsComponent } from './pages/page-seniors/page-seniors.component';
import { PageBenevolesComponent } from './pages/page-benevoles/page-benevoles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateMemberComponent } from './pages/create-member/create-member.component';
import { UpdateMemberComponent } from './pages/update-member/update-member.component';
import { PageLogoutComponent } from './pages/page-logout/page-logout.component';
import { ConfirmCreateUserComponent } from './pages/confirm-create-user/confirm-create-user.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageSignUpComponent,
    PageSignInComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    PageSeniorsComponent,
    PageBenevolesComponent,
    CreateMemberComponent,
    UpdateMemberComponent,
    PageLogoutComponent,
    ConfirmCreateUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
