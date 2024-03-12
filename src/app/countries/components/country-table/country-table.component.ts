import {  Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Router } from '@angular/router';

@Component({
    selector: 'app-country-table',
    templateUrl: './country-table.component.html',
})
export class CountryTableComponent { 
  constructor(private router: Router) {
    
  }
  @Input()
  public countries:Country[]= []

  public onNavigate(id:string){
    console.log(id);
    
    this.router.navigate(['/countries/by', id]);
  }
}
