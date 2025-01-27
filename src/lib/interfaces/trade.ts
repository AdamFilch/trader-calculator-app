export type CompleteTradePayload = {
    report_id_fk: string
    trade_id_pk: string,
    trade_profit: number,
    trade_realised: number,
    trade_plus_minus: number,
    trade_sold_for: number,
    trade_date_sold: string,
    trade_earn_per_day: number
}


export type NewTradePayload = {
    trade_id_fk: string,
    trade_id_pk: string,
    trade_invested: number,
    trade_bought_for: number,
    trade_date_bought: string,
    trade_stock_code: string

}