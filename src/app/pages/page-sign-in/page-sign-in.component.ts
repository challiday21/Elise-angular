import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})

export class PageSignInComponent implements OnInit {

  signInError = false;

  model = new User('', '');

  submitted = false;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitSignIn(form: NgForm) {
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;

    const requeteObservable = this.authService.logUser(username, password);

    requeteObservable.subscribe({
      // method a appeler en cas de succès 
      next: (resp: any) => {
        console.log(resp.accessToken);

        this.router.navigateByUrl('/');
        // TODO stockage de mon token
        // Localstorage
        localStorage.setItem("token", resp.token);
        this.authService.messager.next(true);
      },
      // method a appeler en cas d'error
      error: (err: any) => {
        // affichage message d'erreur coté page
        this.signInError = true;
        console.log(err);
        this.authService.newsletter.next('Erreur de connexion ...');
      }
    })


  }
}