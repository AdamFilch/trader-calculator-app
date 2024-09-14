import { create } from "zustand";
import { AverageArray } from "@/src/lib/interfaces/Average";

interface AverageCalculatorState {
  averages_array: AverageArray[];
  total_lot_size: number;
  cumm_average: string;
  calculate: () => void;
  add_sp: (index: number, val: string) => void;
  add_ls: (index: number, val: string) => void;
  add_array: () => void;
}

export const useAverageStore = create<AverageCalculatorState>((set) => ({
  averages_array: Array(5)
    .fill(null)
    .map((_, index) => ({
      id: index,
      stock_price: "",
      lot_size: "",
    })),
  total_lot_size: 0,
  cumm_average: "",
  calculate: () => {},
  add_sp: (index, val) => {
    set((state) => {
      const newArrayState = state.averages_array.map((arr, i) =>
        i === index ? { ...arr, stock_price: val } : arr
      );

      return { ...state, averages_array: newArrayState };
    });
  },
  add_ls: (index, val) => {
    set((state) => {
      const newArrayState = state.averages_array.map((arr, i) =>
        i === index ? { ...arr, lot_size: val } : arr
      );

      return { ...state, averages_array: newArrayState };
    });
  },
  add_array: () => {
    set((state) => {
      const newArrInputs = {
        id: state.averages_array.length,
        stock_price: "",
        lot_size: "",
      };
      const newArrayState = [...state.averages_array, newArrInputs];
      return { ...state, averages_array: newArrayState };
    });
  },
}));
