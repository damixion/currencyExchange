import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyRate } from '../models/CurrencyRate';

@Injectable({
  providedIn: 'root'
})
export class DataNbpService {

  constructor(private http: HttpClient) { }

  getExchangeRate(): Observable<CurrencyRate[]>
  {
    return this.http.get<CurrencyRate[]>('https://api.nbp.pl/api/exchangerates/tables/a/?format=json');
  }
}
