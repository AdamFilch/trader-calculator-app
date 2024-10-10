export interface MarketStd {
  mic: string;
  exchange: string;
  acronym?: string;
  url: string;
  city: string;
  country: string;
  country_code: string;
  flag: string;
  currency_code: string;
  currency_symbol: string;
  region: string;
  timezone: string;
  timezone_abbr: string;
  utc_offset: string;
  dst: Boolean;
  weekdays: string[];
  open_time: string;
  close_time: string;
  scheduled_break: {};
}

export interface MarketHoliday {
  exchange: string;
  flag: string;
  mic: string;
  date: string;
  day_of_week: string;
  is_weekend: Boolean;
  is_business_day: Boolean;
  holiday_name?: string;
  is_early_close: Boolean;
}
