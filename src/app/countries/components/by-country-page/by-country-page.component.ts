import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {
  public countries : Country[] = [];

  constructor(private countryService:CountryService) {
    
  }
  public searchByCountry(value:string){
    this.countryService.getCountryByCountry(value).subscribe((countries) =>{
      this.countries = countries
    })
  }
}
