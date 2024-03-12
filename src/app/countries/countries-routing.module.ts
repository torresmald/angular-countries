import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './components/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './components/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './components/by-country-page/by-country-page.component';
import { CountryPageComponent } from './components/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
