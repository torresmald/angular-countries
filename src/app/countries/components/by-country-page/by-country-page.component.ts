import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {
  public countries : Country[] = [];
  public initialValue: string = ''

  constructor(private countryService:CountryService) {
  }

    ngOnInit(): void {
      this.countries = this.countryService.cacheStore.byCountry.countries
      this.initialValue = this.countryService.cacheStore.byCountry.term
  }
  
  public searchByCountry(value:string){    
    this.countryService.getCountryBy('name' ,value).subscribe((countries) =>{
      this.countries = countries
    })
    
  }
}
