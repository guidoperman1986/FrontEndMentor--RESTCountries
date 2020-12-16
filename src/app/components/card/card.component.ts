import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RESTCountries } from 'src/app/interfaces/rest-countries.interface';
import { RestCountriesService } from 'src/app/services/rest-countries.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() countrie:RESTCountries;

  constructor(private restCountries:RestCountriesService) { 
  }
  
  ngOnInit(): void {    
  }
  
  ngOnDestroy(): void {
    
  }
}
