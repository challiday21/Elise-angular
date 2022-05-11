import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-seniors',
  templateUrl: './page-seniors.component.html',
  styleUrls: ['./page-seniors.component.css']
})
export class PageSeniorsComponent implements OnInit {

  public listCountries!: any[];
  public test = ["Coucou", "Hello"];

  constructor() { }

  ngOnInit(): void {

    fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population,cca2")
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response);
        this.listCountries = response;
      })

  }

}
