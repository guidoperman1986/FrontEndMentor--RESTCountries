import { Component } from '@angular/core';
import { RestCountriesService } from './services/rest-countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restCountries';
  color:string;

  constructor(){

  }

}
