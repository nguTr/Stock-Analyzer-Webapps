import { ExecutionEvent } from "./execution-event.model";

/**
 * If Trade is Buy or Sell
 */
export enum TradeAction {
    BUY,
    SELL
}

/**
 * Interface to create or edit Ledger Interface
 */
export interface TradeEntryRequest {
    swingId: number;
    symbol: string;
    action: TradeAction;
    events: ExecutionEvent[];
}