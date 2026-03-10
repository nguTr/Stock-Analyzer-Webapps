import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TickersComponent } from './dashboard/tickers/tickers';
import { TickerService } from './dashboard/tickers/tickers-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TickersComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Stock-Analyzer-Webapps');

  constructor(private tickerService: TickerService) {
    this.tickerService.getHello().subscribe((helloMsg: string) => console.log(helloMsg));
  }
}
