import { create } from "zustand";

interface AverageArray {
  stock_price: string;
  lot_size: number;
}

interface AverageCalculatorState {
  averages_array: AverageArray[];
  total_lot_size: number;
  cumm_average: string;
  calculate: () => void;
  update: () => void;
}

export const useAverageStore = create<AverageCalculatorState>((set) => ({
  averages_array: Array(5).fill({ stock_price: "", lot_size: 0 }),
  total_lot_size: 0,
  cumm_average: "",
  calculate: () => {},
  update: () => {},
}));
