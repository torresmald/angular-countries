import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  public country!: Country;
  constructor(
    private routes: ActivatedRoute,
    private countryService: CountryService
  ) {}
  ngOnInit(): void {
    this.routes.params
      .pipe(
        switchMap((params) =>
          this.countryService.getCountryByCode(params['id'])
        )
      )
      .subscribe((country) => (this.country = country));
  }
}
