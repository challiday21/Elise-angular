import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-benevoles',
  templateUrl: './page-benevoles.component.html',
  styleUrls: ['./page-benevoles.component.css']
})
export class PageBenevolesComponent implements OnInit {

  public listCountries!: any[];

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
