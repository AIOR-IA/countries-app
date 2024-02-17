import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent implements OnInit {

  countries:Country[] = [];
  regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania']
  selectedRegion?: Region;

  constructor( private countryService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;

  }

  searchByRegion( region: Region ) {
    this.selectedRegion = region;
    this.countryService.searchRegion( region ).subscribe( res => {
      this.countries = res;
      // this.countries = this.countries.slice(0, 10);ng s
    } )
  }
}
