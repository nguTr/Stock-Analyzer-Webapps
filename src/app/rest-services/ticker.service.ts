import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Historical Ticker Data Service
 */
@Injectable({
  providedIn: 'root',
})
export class TickerService {

  private httpClient = inject(HttpClient);
  private BASE_URL = 'api/tickers';

  /**
   * Re-ingest all Ticker Historical Data
   * Also rebuilds all the ML scripts
   * @returns Elasped time of writing history of weekly data of selected tickers
   */
  writeTickersHistoryAll(): Observable<string> {
    return this.httpClient.get(`${this.BASE_URL}/write/history`, {
      responseType: 'text',
    });
  }

  /**
   * Rebuild Features Master Weekly for ML
   * @returns
   */
  rebuildFeaturesMasterWeekly(): Observable<string> {
    return this.httpClient.get(`${this.BASE_URL}/rebuild/features-master-weekly`, {
      responseType: 'text'
    })
  }
}
