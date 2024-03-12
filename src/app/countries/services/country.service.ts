import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "../interfaces/country";
import { Observable, catchError, of } from "rxjs";
const URL_API = 'https://restcountries.com/v3.1'
@Injectable({
    providedIn: 'root'
})
export class CountryService{
    public countries : Country[] = [];
    constructor(private http: HttpClient) {
    }

    public getCountryByCapital(capital:string):Observable<Country[]>{
        return this.http.get<Country[]>(`${URL_API}/capital/${capital}`).pipe(
            catchError(error => of([]))
        )
    }
    public getCountryByCountry(country:string):Observable<Country[]>{
        return this.http.get<Country[]>(`${URL_API}/name/${country}`).pipe(
            catchError(error => of([]))
        )
    }
    public getCountryByRegion(region:string):Observable<Country[]>{
        return this.http.get<Country[]>(`${URL_API}/region/${region}`).pipe(
            catchError(error => of([]))
        )
    }

    public getCountryByCode(code:string):Observable<Country[]>{
        return this.http.get<Country[]>(`${URL_API}/alpha/${code}`).pipe(
            catchError(error => of([]))
        )
    }
}