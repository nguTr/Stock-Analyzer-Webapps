import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TradeSwing } from "../model/trade-swing.model";

/**
 * Rest Service For Trade Swing
 */
@Injectable({
    providedIn: 'root'
})
export class SwingsService {

    private http = inject(HttpClient);
    private swingsUrl = "/api/live/swings"

    /**
     * Get Trade Swing by ID
     * @param swingId 
     * @returns 
     */
    getTradeSwing(swingId: number): Observable<TradeSwing> {
        return this.http.get<TradeSwing>(`${this.swingsUrl}/${swingId}`);
    }

    /**
     * Get all Trade Swings
     * @returns 
     */
    getAllTradeSwings(): Observable<TradeSwing[]> {
        return this.http.get<TradeSwing[]>(this.swingsUrl);
    }

    /**
     * Create new Trade Swing
     * @param swing 
     * @returns 
     */
    createTradeSwing(swing: TradeSwing): Observable<TradeSwing> {
        return this.http.post<TradeSwing>(this.swingsUrl, swing);
    }

    /**
     * Edit existing Trade Swing
     * @param swing 
     * @returns 
     */
    editTradeSwing(swing: TradeSwing): Observable<TradeSwing> {
        return this.http.put<TradeSwing>(`${this.swingsUrl}/${swing.swingId}`, swing);
    }

    /**
     * Delete existing Trade Swing
     * @param swingId 
     * @returns 
     */
    deleteTradeSwing(swingId: number): Observable<void> {
        return this.http.delete<void>(`${this.swingsUrl}/${swingId}`);
    }

    /**
     * Mark Trade Swing as Closed (Trade Swing Campaign concludes)
     * @param swingId 
     * @returns 
     */
    closeTradeSwing(swingId: number): Observable<void> {
        return this.http.post<void>(`${this.swingsUrl}/${swingId}/close`, null);
    }
}