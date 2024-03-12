import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  public countries : Country[] = [];

  constructor(private countryService:CountryService) {
    
  }
  public searchByCapital(value:string){
    this.countryService.getCountryByCapital(value).subscribe((countries) =>{
      this.countries = countries
    })
  }
}
