import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTCountries } from '../interfaces/rest-countries.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  mode            = 'light';
  
  colorBackground = 'white';
  colorText       = 'black';
  colorNav        = 'white';
  colorInput      = '#eaeaea';
  cardColor       = '#eaeaea';
  //borderColor     = '#eaeaea';
  
  'color-nav-dark'    = '#2b3743';
  'color-body-dark'   = '#212e37';
  'color-texto-dark'  = '#dedfe0';

  url = 'https://restcountries.eu/rest/v2'; 

  constructor(private http:HttpClient) {
    this.Mode;
  }

  getCountries(){
    return this.http.get<RESTCountries[]>(this.url+'/all');
  }
  
  getCountry(code:string){
    return this.http.get<RESTCountries>(this.url+'/alpha/'+code);
  }

  getCountryByName(name:string){
    return this.http.get<RESTCountries[]>(this.url+'/name/'+name);
  }

  /* changeMode(){
    
    (this.mode == 'light') ? this.mode = 'dark' : this.mode = 'light';
    
    this.subject$.next(this.mode);
  } */

  changeColor(){

    (this.mode === 'dark')
          ? ( this.mode             = 'light', 
              this.colorNav         = 'white', 
              this.colorBackground  = 'white', 
              this.colorText        = 'black',
              this.colorInput       = '#eaeaea',
              this.cardColor        = '#eaeaea'
            )
          : ( this.mode = 'dark',  
              this.colorNav         = this["color-nav-dark"], 
              this.colorBackground  = this["color-body-dark"], 
              this.colorText        = this["color-texto-dark"],
              this.colorInput       = this["color-nav-dark"],
              this.cardColor        = this["color-nav-dark"]
          );

    localStorage.setItem('mode',            this.mode);
    localStorage.setItem('colorNav',        this.colorNav);
    localStorage.setItem('colorBackground', this.colorBackground);
    localStorage.setItem('colorText',       this.colorText);
    localStorage.setItem('colorInput',      this.colorInput);
    localStorage.setItem('colorCard',       this.cardColor);
  }

  get Color(){
    if (localStorage.getItem('colorBackground')){
      this.colorNav         = localStorage.getItem('colorNav');
      this.colorBackground  = localStorage.getItem('colorBackground');
      this.colorText        = localStorage.getItem('colorText');
      this.colorInput       = localStorage.getItem('colorInput');
      this.cardColor        = localStorage.getItem('cardColor');
    }

    return [this.colorBackground, this.colorText, this.colorNav, this.colorInput, this.cardColor];
  }

  get Mode(){
    if (localStorage.getItem('mode')){
      this.mode = localStorage.getItem('mode')
    } else {
      localStorage.setItem('mode',this.mode);
    }
    return this.mode;
  }


}