import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements  OnInit{

  country!: Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
    )
    .subscribe( ( resp ) => {
        if( ! resp ) {
          return this.router.navigateByUrl('');
        }
        return this.country = resp;
    })
  }

  // searchCountry( code: string ) {
  //   this.countriesService.searchCountryByAlphaCode( code )
  //   .subscribe( res => {
  //     console.log(res)
  //   })
  // }
}
