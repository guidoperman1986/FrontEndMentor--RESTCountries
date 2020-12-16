import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RESTCountries } from 'src/app/interfaces/rest-countries.interface';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  countriesArray:       RESTCountries[] = [];
  countriesArrayAux:    RESTCountries[] = [];
  countriesArraySearch: RESTCountries[] = [];

  constructor(private countries:RestCountriesService) {
  }
    
  ngOnInit(): void {
    this.countries.getCountries().subscribe(countries=>{
      this.countriesArray = countries;
    });
  }

  queryByRegion(region:string){
    //le pongo todos los paises al array para que si el usuario selecciona una nueva zona que vuelva a cero el array principal
    if (this.countriesArrayAux.length > 0) this.countriesArray = this.countriesArrayAux;

    this.countriesArrayAux = this.countriesArray;
    let countrys = this.countriesArray.filter(country=>country.region === region);
    this.countriesArray = countrys;
    
  }

  searchValue(name:string){
    this.countriesArraySearch = this.countriesArray;
    /* 
    this.countries.getCountryByName(name).subscribe((data)=>{
      this.countriesArray = data;
    }) */

    if (this.countriesArrayAux.length > 0){
      this.countriesArray = this.countriesArrayAux.filter((country) => country.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 )
    } else {
      this.countriesArray = this.countriesArraySearch.filter((country) => country.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 )

    }

  }

  ngOnDestroy(): void {
  }
}