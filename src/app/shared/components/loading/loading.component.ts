import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CountryService } from 'src/app/countries/services/country.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  public showLoading: Subject<boolean>;

  constructor(private countryService: CountryService) {
    this.showLoading = this.countryService.shouldShowLoading$
  }
}
