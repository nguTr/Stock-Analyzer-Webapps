import { CloseType } from "../../swings/model/close-type.enum";

/**
 * Execution Event for Ledgers
 * Also matches back-end ExecutionEvent
 */
export interface ExecutionEvent {
    tradeId: number;
    quantity: number;
    fillPrice: string;      // Java Big Decimal
    executionTime: Date;
    slippageBps: string;    // Java Big Decimal
    closeType: CloseType;   // How the trade was closed
}