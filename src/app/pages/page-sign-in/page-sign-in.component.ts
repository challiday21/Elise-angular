import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from '../../user';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})
export class PageSignInComponent implements OnInit {

  model = new User('','');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  
  constructor() { }

  ngOnInit(): void { 
  }
}