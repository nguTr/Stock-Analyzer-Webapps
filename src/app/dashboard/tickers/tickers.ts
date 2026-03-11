import { Component, signal, WritableSignal } from '@angular/core';
import { TickerService } from './tickers-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tickers-component',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './tickers.html',
  styleUrl: './tickers.scss',
})
export class TickersComponent {

  constructor(private tickerService: TickerService) { }

  currentTickerData: WritableSignal<string> = signal('');

  /**
   * Get ticker weekly history for 'TSLA'
   */
  getTickerHistory(): void {
    this.tickerService.getTickerHistory('TSLA').subscribe((historyStr: string) => {
      this.currentTickerData.set(historyStr);
    });
  }
}
