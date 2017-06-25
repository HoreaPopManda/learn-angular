import { BtcAsk } from './btcask.interface';
import { BtcBid } from './btcbid.inferface';

export interface BtcTrades {
  currency: string;
  instrument: string;
  timestamp: number;
  asks: BtcAsk[];
}
