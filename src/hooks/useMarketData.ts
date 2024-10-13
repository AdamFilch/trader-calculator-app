import XIDX from "@/assets/market_calendar/XIDX.json";
import XASX from "@/assets/market_calendar/XASX.json";
import XKLS from "@/assets/market_calendar/XKLS.json";
import XNYS from "@/assets/market_calendar/XNYS.json";
import XSES from "@/assets/market_calendar/XSES.json";
import XTKS from "@/assets/market_calendar/XTKS.json";
import { MarketHoliday, MarketStd } from "../lib/interfaces/market";

type marketKey = "XIDX" | "XASX" | "XKLS" | "XNYS" | "XSES" | "XTKS";

const marketFiles = {
  XIDX,
  XASX,
  XKLS,
  XNYS,
  XSES,
  XTKS,
};

export function useMarketData(market: any) {
  const marketData: MarketStd = marketFiles[market as marketKey]["std"];

  if (!marketData) {
    throw new Error(`Market data for ${market} not found`);
  }

  return { market: marketData };
}

export function useMarketHolidays(market: any) {
  try {
    const marketData: MarketHoliday[] =
      marketFiles[market as marketKey]["holidays"];

    if (!marketData) {
      throw new Error(`Market data for ${market} not found`);
    }

    console.log("UseMarketDataPleas", marketData);
    return { market: marketData };
  } catch (err) {
    console.error("Erro Encountered in fetching Holidays");
  }
}

export function getNextMarketHolidays(market: any, future?: number) {
  const marketData: MarketHoliday[] =
    marketFiles[market as marketKey]["holidays"];
  const today = new Date().toISOString();
  const nextHoliday = marketData.filter(
    (holiday) => holiday.date > today.split("T")[0]
  );

  return future ? nextHoliday.slice(0, future) : nextHoliday;
}
