import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TickerService } from './tickers/tickers-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Stock-Analyzer-Webapps');

  constructor(private tickerService: TickerService) {
    this.tickerService.getHello().subscribe((whatever) => console.log(whatever));
  }


}
