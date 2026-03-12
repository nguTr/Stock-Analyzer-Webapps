import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TickerService {
  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'api/tickers';

  getHello(): Observable<string> {
    return this.httpClient.get('/api/hello', { responseType: 'text' });
  }

  /**
   * @param tickerSymbol
   * @returns ticker weekly history
   */
  getTickerHistory(tickerSymbol: string): Observable<string> {
    return this.httpClient.get(`${this.BASE_URL}/${tickerSymbol}/history`, {
      responseType: 'text',
    });
  }

  /**
   * @returns Elasped time of writing history of weekly data of selected tickers
   */
  writeTickersHistoryAll(): Observable<Response> {
    return this.httpClient.get<Response>(`${this.BASE_URL}/allTickers/write/history`);
  }
}
