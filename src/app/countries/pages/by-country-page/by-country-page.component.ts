import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  countries:Country[] = [];
  initialValue = '';
  constructor( private countryService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByCapital( term: string ) {
    this.countryService.searchCountry( term ).subscribe( res => {
      this.countries = res;
    } )
  }
}
