export interface Rate {
      currency: string;
      code: string;
      mid: number;
  }

export interface CurrencyRate {
      table: string;
      no: string;
      effectiveDate: string;
      rates: Rate[];
  }

