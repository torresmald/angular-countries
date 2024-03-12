import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {
  public countries : Country[] = [];
  public initialValue: string = ''
  constructor(private countryService:CountryService) {
    
  }

  ngOnInit(): void {
      this.countries = this.countryService.cacheStore.byCapital.countries
      this.initialValue = this.countryService.cacheStore.byCapital.term
  }
  public searchByCapital(value:string){
    this.countryService.getCountryBy('capital',value).subscribe((countries) =>{
      this.countries = countries
    })
  }
}
