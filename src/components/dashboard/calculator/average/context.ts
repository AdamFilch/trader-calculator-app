import { create } from "zustand";
import { AverageArray } from "@/src/lib/interfaces/Average";

interface AverageCalculatorState {
  averages_array: AverageArray[];
  total_lot_size: number;
  amount_invested: number;
  cumm_average: number;
  calculate: () => void;
  add_sp: (index: number, val: string) => void;
  add_ls: (index: number, val: string) => void;
  add_array: () => void;
  delete_array: (index: number) => void;
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
  amount_invested: 0,
  cumm_average: 0,
  calculate: () => {
    set((state) => {
      state.total_lot_size = 0;
      state.amount_invested = 0;

      const filterd = state.averages_array.map((arr) => {
        if (
          !isNaN(parseInt(arr.lot_size)) &&
          !isNaN(parseInt(arr.stock_price))
        ) {
          const ls = parseInt(arr.lot_size);
          const sp = parseInt(arr.stock_price);
          const invested = sp * 100 * ls;
          state.total_lot_size += ls;
          state.amount_invested += invested;
          state.cumm_average =
            state.amount_invested / state.total_lot_size / 100;
        }
      });
      const acceptedArrays = state.averages_array.filter(
        (arr) =>
          !isNaN(parseInt(arr.lot_size)) && !isNaN(parseInt(arr.stock_price))
      );
      console.log("CalculateAverage", acceptedArrays);

      return { ...state };
    });
  },
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
  delete_array: (index) => {
    set((state) => {
      const newArrayState = state.averages_array.filter(
        (arr) => arr.id != index - 1
      );
      return { ...state, averages_array: newArrayState };
    });
  },
}));
