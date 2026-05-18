import { Component, signal, WritableSignal } from '@angular/core';
import { TickerService } from './tickers-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SimulationService } from './tickers-simulation-service';

@Component({
  selector: 'tickers-component',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './tickers.html',
  styleUrl: './tickers.scss',
})
export class TickersComponent {
  constructor(private tickerService: TickerService, private simulationService: SimulationService) { }

  /**
   * Write to .csv files weekly ticker history for selected tickers
   */
  writeTickersHistoryAll(): void {
    this.tickerService.writeTickersHistoryAll().subscribe((whatever) => {
      console.log(whatever);
    });
  }

  rebuildFeaturesMasterWeekly(): void {
    this.tickerService.rebuildFeaturesMasterWeekly().subscribe((whatever) => {
      console.log(whatever);
    })
  }

  runSimulation(): void {
    this.simulationService.runSimulation().subscribe((whatever) => {
      console.log(whatever);
    })
  }
}
