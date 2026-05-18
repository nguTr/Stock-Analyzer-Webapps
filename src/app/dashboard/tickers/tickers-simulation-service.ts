import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SimulationService {

    constructor(private httpClient: HttpClient) { }

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