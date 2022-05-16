import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickLogout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/sign-in');
    /**
     *  - Supprimer le token dans le localStorage
        - Modifier la valeur de la propriété isAuthenticated à false
        - Rediriger l'utilisateur vers la page de connexion ("sign-in")
     */
  }


}
