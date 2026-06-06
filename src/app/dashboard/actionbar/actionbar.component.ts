import { Component, inject } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { SimulationService } from '../../rest-services/simulation.service';
import { TickerService } from '../../rest-services/ticker.service';

/**
 * Action buttons bar on left of Dashboard
 */
@Component({
  selector: 'app-actionbar',
  imports: [MatCardModule, MatIcon, MatButtonModule, MatTooltip],
  templateUrl: './actionbar.component.html',
  styleUrl: './actionbar.component.scss',
})
export class ActionbarComponent {

  private tickerService = inject(TickerService);
  private simulationService = inject(SimulationService);

  /**
   * Reingest Norgate Data
   */
  reingestNorgateData(): void {
    this.tickerService.writeTickersHistoryAll().subscribe((result) => console.log(result));
  }

  /**
   * Run Live Holdout Simulator
   */
  runSimulator(): void {
    this.simulationService.runSimulation().subscribe((result) => console.log(result));
  }
}
