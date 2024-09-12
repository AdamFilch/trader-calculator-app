import { create } from "zustand";

interface AverageCalculatorState {
  averages_array: AverageArray[];
  total_lot_size: number;
  cumm_average: string;
  calculate: () => void;
  update: () => void;
}

export const useAverageStore = create<AverageCalculatorState>((set) => ({
  averages_array: [],
  total_lot_size: 0,
  cumm_average: "",
  calculate: () => {},
  update: () => {},
}));
