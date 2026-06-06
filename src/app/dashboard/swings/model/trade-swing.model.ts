import { Ledger } from "../../ledgers/model/ledger.model";
import { SwingStatus } from "./swing-status.enum";

/**
 * Trade Swing Interface
 * Represents both the full back-end TradeSwingDto from DB, and TradeSwingDto input to create a new TradeSwing
 */
export interface TradeSwing {

    /** Required fields to create new Trade Swing for back end */
    name: string;
    allocatedCapital: string;   // Java Big Decimal
    notes: string;

    /** Optional fields -> Once new Trade Swing created, these fields are generated back by the back-end */
    swingId?: number;
    status?: SwingStatus;
    createdAt?: Date;
    closedAt?: Date;
    daysActive?: number;
    swingRealizedPnl?: string;  // Java Big Decimal
    winRate?: string;           // Java Big Decimal
    roc?: string;               // Java Big Decimal
    annualizedRoc?: string;     // Java Big Decimal
    ledgers?: Ledger[];
}