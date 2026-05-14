import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TickerService {
  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'api/tickers';

  /**
   * @returns Elasped time of writing history of weekly data of selected tickers
   */
  writeTickersHistoryAll(): Observable<string> {
    return this.httpClient.get(`${this.BASE_URL}/write/history`, {
      responseType: 'text',
    });
  }

  rebuildFeaturesMasterWeekly(): Observable<string> {
    return this.httpClient.get(`${this.BASE_URL}/rebuild/features-master-weekly`, {
      responseType: 'text'
    })
  }
}
