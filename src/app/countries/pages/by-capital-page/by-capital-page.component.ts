import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  countries: Country[] = [];
  isLoading = false;
  initialValue = '';

  constructor( private countryService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ) {
    this.isLoading = true;
    this.countryService.searchCapital( term ).subscribe( res => {
      this.countries = res;
      this.isLoading = false;
    } )
  }
}
