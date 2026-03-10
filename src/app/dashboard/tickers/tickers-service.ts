import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TickerService {
  constructor(private httpClient: HttpClient) {}

  getHello(): Observable<string> {
    return this.httpClient.get('api/hello', { responseType: 'text' });
  }

  /**
   * @param tickerSymbol 
   * @returns ticker weekly history
   */
  getTickerHistory(tickerSymbol: string): Observable<string> {
    return this.httpClient.get(`api/tickers/${tickerSymbol}/history`, { responseType: 'text' });
  }
}
