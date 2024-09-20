import { FixedIncomeModel } from "@/src/lib/interfaces/calculator";
import { create } from "zustand";

interface FixedIncomeState {
  state: FixedIncomeModel;
}

export const useFixedIncomeStore = create<FixedIncomeState>((set) => ({
  state: {
    total_return: 0,
    Tenor: "",
    yield: 0,
    longevity: 0,
    tempo: 0,
    return_per_tempo: 0,
    age: 0,
    price_per_unit: 0,
    period: [],
  },
}));
