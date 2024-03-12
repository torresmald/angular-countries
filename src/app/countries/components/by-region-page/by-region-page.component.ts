import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {
  public countries : Country[] = [];
  public regions?: Region[] = ['Asia' , 'Americas' ,'Europe' ,'Africa' , 'Oceania'];
  public selectedRegion?: Region | string;

  constructor(private countryService:CountryService) {
    
  }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries
    this.selectedRegion = this.countryService.cacheStore.byRegion.term
    console.log(this.selectedRegion);
    
}
  public searchByRegion(value:Region){
    this.selectedRegion = value
    this.countryService.getCountryBy('region',value).subscribe((countries) =>{
      this.countries = countries
    })
  }
}
