import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExecutionEvent } from "../model/execution-event.model";
import { Ledger } from "../model/ledger.model";
import { TradeEntryRequest } from "../model/trade-entry-request.model";

/**
 * Rest Service for Ledger
 */
@Injectable({
    providedIn: 'root'
})
export class LedgerService {

    private http = inject(HttpClient);
    private ledgersUrl = "/api/live/ledgers";

    /**
     * Get Ledgers by Swing ID
     * @param swingId 
     * @returns 
     */
    getLedgersBySwingId(swingId: number): Observable<Ledger[]> {
        return this.http.get<Ledger[]>(this.ledgersUrl,
            { params: { swingId: swingId } }
        );
    }

    /**
     * Create new Ledger
     * @param request 
     * @returns 
     */
    createLedger(request: TradeEntryRequest): Observable<ExecutionEvent[]> {
        return this.http.post<ExecutionEvent[]>(this.ledgersUrl, request);
    }

    /**
     * Edit existing Ledger
     * @param tradeId 
     * @param request 
     * @returns 
     */
    editLedger(tradeId: number, request: TradeEntryRequest): Observable<Ledger> {
        return this.http.put<Ledger>(`${this.ledgersUrl}/${tradeId}`, request);
    }

    /**
     * Delete existing Ledger
     * @param tradeId 
     * @returns 
     */
    deleteLedger(tradeId: number): Observable<void> {
        return this.http.delete<void>(`${this.ledgersUrl}/${tradeId}`);
    }
}