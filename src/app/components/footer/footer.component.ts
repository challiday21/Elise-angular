import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public isAuthenticated = false;
  router: any;

  constructor() { }

  ngOnInit(): void {

    const token = localStorage.getItem('token');

    if (token !== null && token !== '') {
      this.isAuthenticated = true;
    }

  }

  onClickLogout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/');
  }

}
