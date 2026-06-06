import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Live Holdout Simulation Service
 */
@Injectable({
    providedIn: 'root',
})
export class SimulationService {

    private httpClient = inject(HttpClient);
    private BASE_URL = "api/simulator";

    /**
     * Run Live Holdout Phase Simulation for Meta Model
     * @returns
     */
    runSimulation(): Observable<String> {
        return this.httpClient.get(`${this.BASE_URL}/run-simulation`, {
            responseType: 'text'
        })
    }
}