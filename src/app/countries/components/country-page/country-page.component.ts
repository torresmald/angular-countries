import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  public id: string = '';
  public countries!: Country[];
  constructor(private routes: ActivatedRoute, private countryService:CountryService) {}
  ngOnInit(): void {
    this.routes.params.subscribe(param => this.id = param['id']);
    this.countryService.getCountryByCode(this.id).subscribe(country => {
      console.log(country);
      this.countries = country
    })
  }
}
