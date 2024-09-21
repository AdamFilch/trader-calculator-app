export interface AverageArray {
  id: number;
  stock_price: string;
  lot_size: string;
}

export interface ProfitLossModel {
  modal: Number;
  profit: Number;
  transaction_fee: Number;
  realised: Number;
  plus_minus: Number;
  bought_for: string;
  sold_for: string;
  lot_size: string;
}

export interface FixedIncomeModel {
  total_return: Number;
  Tenor: string;
  yield: Number;
  longevity: Number;
  tempo: Number;
  return_per_tempo: Number;
  age: Number;
  price_per_unit: Number;
  unit_per_mon: Number;
  period: FIPeriodModel[];
}

interface FIPeriodModel {
  id: string;
  date: Date;
  total_units: Number;
  return: Number;
  current_profit: Number;
}
