import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from '../models/CountryModel';

@Injectable({ providedIn: 'root' })

export class CountryService {
   baseUrl = 'https://countriesnow.space/api/v0.1/countries';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryResponse> {
    return this.http.get<CountryResponse>(this.baseUrl);
  }
}