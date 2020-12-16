import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RESTCountries } from 'src/app/interfaces/rest-countries.interface';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countrySelected:RESTCountries;
  error:boolean;

  constructor(private ar:ActivatedRoute, private country:RestCountriesService) { 
    this.ar.params.subscribe(({id})=>{
      this.country.getCountry(id).subscribe((country)=>{
        console.log(country);
        this.countrySelected=country
      },error=>{
        this.error = true;
      })
    })


  }

  ngOnInit(): void {
  }

}
