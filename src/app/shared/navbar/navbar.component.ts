import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  mode: string;
  private themeWrapper = document.querySelector('body');

  constructor(private restCountries:RestCountriesService) {
  }

  ngOnInit(): void {
    //this.aplicarColor();
    this.globalStyle();
  }

  cambiarColor(){
    this.restCountries.changeColor();
  }

  globalStyle(){
    this.mode = this.restCountries.Mode;
    let color = this.restCountries.Color;

    document.body.style.background = color[0];

    this.themeWrapper.style.setProperty('--bodyBackground',   color[0]);
    this.themeWrapper.style.setProperty('--textColor',        color[1]);
    this.themeWrapper.style.setProperty('--inputBackground',  color[3]);
    this.themeWrapper.style.setProperty('--cardBackground',   color[3]);
  }
  
  aplicarColor(){
    this.mode = this.restCountries.Mode;

    let color = this.restCountries.Color;

    /* colores para el body */
    document.body.style.background = color[0];
    
    this.themeWrapper.style.setProperty('--bodyBackground',   color[0]);
    this.themeWrapper.style.setProperty('--textColor',        color[1]);
    this.themeWrapper.style.setProperty('--inputBackground',  color[3]);
    this.themeWrapper.style.setProperty('--cardBackground',   color[3]);
    
  }

  ngOnDestroy(): void {
  }
}