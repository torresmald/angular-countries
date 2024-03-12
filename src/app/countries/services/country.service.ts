import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, Subject, catchError, delay, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';
const URL_API = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  public countries: Country[] = [];

  public shouldShowLoading$: Subject<boolean> = new Subject<boolean>();
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { countries: [] },
  };

  constructor(private http: HttpClient) {
    this.shouldShowLoading$.next(false);
    this.loadFromStorage();
  }

  public showLoading() {
    this.shouldShowLoading$.next(true);
  }

  public hideLoading() {
    this.shouldShowLoading$.next(false);
  }

  private saveLocalStorage() {
    localStorage.setItem('store', JSON.stringify(this.cacheStore));
  }

  private loadFromStorage() {
    if (!localStorage.getItem('store')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('store')!);
  }

  public getCountryByCode(code: string): Observable<Country> {
    this.showLoading();
    return this.http.get<Country[]>(`${URL_API}/alpha/${code}`).pipe(
      map((country: Country[]) => {
        return country[0];
      }),
      catchError((error) => of()),
      tap(() => {
        this.hideLoading();
      })
    );
  }

  public getCountryBy(
    endpoint: string,
    term: string | Region
  ): Observable<Country[]> {
    this.showLoading();
    let callCapital: boolean = false;
    let callRegion: boolean = false;
    let callCountry: boolean = false;
    switch (endpoint) {
      case 'region':
        callRegion = true;
        break;
      case 'name':
        callCountry = true;
        break;
      case 'capital':
        callCapital = true;
        break;
    }
    return this.http.get<Country[]>(`${URL_API}/${endpoint}/${term}`).pipe(
      catchError((error) => of([])),
      delay(1000),
      tap(() => this.hideLoading()),
      tap((countries) =>
        callCapital == true
          ? (this.cacheStore.byCapital = { countries, term })
          : null
      ),
      tap((countries) =>
        callCountry == true
          ? (this.cacheStore.byCountry = { countries, term })
          : null
      ),
      tap((countries) =>
        callRegion == true
          ? (this.cacheStore.byRegion = { countries, term })
          : null
      ),
      tap(() => this.saveLocalStorage())
    );
  }
}
