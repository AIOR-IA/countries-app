import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 35px
    }`
  ]
})
export class CountryTableComponent {

  currentPage = 1;
  itemsPerPage = 10;

  @Input()
  countries:Country[] = [];

  constructor() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.countries = this.countries.slice(0, 10);
    console.log(this.countries)
  }
}
