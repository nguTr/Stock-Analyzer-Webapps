import { CloseType } from "../../swings/model/close-type.enum";
import { ExecutionEvent } from "./execution-event.model";

/**
 * Ledger Interface for back-end LedgerDto
 */
export interface Ledger {
    symbol: string;
    buys: ExecutionEvent[];
    sells: ExecutionEvent[];
    realizedPnl: string;            // Java Big Decimal
    netSlippageBps: string;         // Java Big Decimal
    primaryCloseType: CloseType;    // Majority way the trades were closed (by quantity)
}