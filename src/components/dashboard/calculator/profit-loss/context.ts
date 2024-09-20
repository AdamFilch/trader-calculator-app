import { ProfitLossModel } from "@/src/lib/interfaces/calculator";
import { create } from "zustand";

const biayaTranksi = {
  sell: "0.001513",
  buy: "0.002513",
};

interface ProfitLossState {
  profitloss: ProfitLossModel;
  calculate: () => void;
  //   add_Base: (bf: string, sf: string, ls: string) => void;
  add_bf: (bf: string) => void;
  add_sf: (sf: string) => void;
  add_ls: (ls: string) => void;
}

export const useProfitLossStore = create<ProfitLossState>((set) => ({
  profitloss: {
    modal: 0,
    profit: 0,
    transaction_fee: 0,
    realised: 0,
    plus_minus: 0,
    bought_for: "",
    sold_for: "",
    lot_size: "",
  },
  calculate: () =>
    set((state) => {
      const { bought_for, sold_for, lot_size, transaction_fee } =
        state.profitloss;
      const bf = parseFloat(bought_for);
      const sf = parseFloat(sold_for);
      const ls = parseFloat(lot_size);

      if (!isNaN(bf) && !isNaN(sf) && !isNaN(ls)) {
        const initialInvestment = bf * 100 * ls;
        const finalInvestment = sf * 100 * ls;
        const profitResult = finalInvestment - initialInvestment;
        const transactionFeeResult =
          initialInvestment * parseFloat(biayaTranksi.buy) +
          finalInvestment * parseFloat(biayaTranksi.sell);
        const realisedProfit = profitResult - transactionFeeResult;
        const plusMinusResult = (sf - bf) / bf;
        return {
          profitloss: {
            ...state.profitloss,
            modal: initialInvestment,
            profit: profitResult,
            transaction_fee: transactionFeeResult,
            realised: realisedProfit,
            plus_minus: plusMinusResult,
          },
        };
      } else if (!isNaN(bf) && !isNaN(ls)) {
        const initialInvestment = bf * 100 * ls;
        const transactionFeeResult =
          initialInvestment * parseFloat(biayaTranksi.buy);
        return {
          profitloss: {
            ...state.profitloss,
            modal: initialInvestment,
            transaction_fee: transactionFeeResult,
            profit: 0,
            plus_minus: 0,
            realised: 0,
          },
        };
      }

      return state;
    }),
  add_bf: (bf) =>
    set((state) => ({
      profitloss: {
        ...state.profitloss,
        bought_for: bf,
      },
    })),
  add_sf: (sf) =>
    set((state) => ({
      profitloss: {
        ...state.profitloss,
        sold_for: sf,
      },
    })),
  add_ls: (ls) =>
    set((state) => ({
      profitloss: {
        ...state.profitloss,
        lot_size: ls,
      },
    })),
}));
