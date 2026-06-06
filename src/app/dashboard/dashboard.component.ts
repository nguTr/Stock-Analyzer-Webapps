import { Component } from '@angular/core';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { SwingsComponent } from "./swings/swings.component";

/**
 * Main Page Dashboard
 */
@Component({
  selector: 'app-dashboard',
  imports: [ActionbarComponent, SwingsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent { }
