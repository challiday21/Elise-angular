import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public isAuthenticated = false;

  constructor(private authservice: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    const token = localStorage.getItem('token');

    if (token !== null && token !== '') {
      this.isAuthenticated = true;
    }

    this.authservice.messager.subscribe((message) => {
      this.isAuthenticated = message;
    });

  }

  onClickLogout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/sign-in');
  }

}