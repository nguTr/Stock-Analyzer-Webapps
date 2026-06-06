import { Component, signal } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html', // <-- Updated
  styleUrl: './app.component.scss',    // <-- Updated
})
export class App {
  protected readonly title = signal('Acies-Angular');

}
