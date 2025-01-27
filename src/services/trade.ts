
// const db = await SQLite.openDatabaseAsync('assets/trader_diary_db.db"');

import { useSQLiteContext } from "expo-sqlite"
import { Float } from "react-native/Libraries/Types/CodegenTypes"

const db = useSQLiteContext()


export async function NewTrade() {
    const query = `INSERT INTO TRADE_T () `
    await db.runAsync(query)
}


type CompleteTradePayload = {
    report_id_fk: string
    trade_id_pk: string,
    trade_profit: number,
    trade_realised: number,
    trade_plus_minus: number,
    trade_sold_for: number,
    trade_date_sold: string,
    trade_earn_per_day: number
}

export async function CompleteTrade(payload: CompleteTradePayload) {
    const query = db.prepareAsync(`
        UPDATE TRADE_T 
        SET 
            trade_profit = (?), 
            trade_realised = (?), 
            trade_plus_minus = (?), 
            trade_sold_for = (?), 
            trade_date_sold = (?), 
            trade_earn_per_day = (?) 
        WHERE 
            trade_id_pk = (?) AND 
            report_id_fk = (?)
        `)

    try {
        const result = (await query).executeAsync(
            payload.trade_profit,
            payload.trade_realised,
            payload.trade_plus_minus,
            payload.trade_sold_for,
            payload.trade_date_sold,
            payload.trade_earn_per_day,
            payload.trade_id_pk,
            payload.report_id_fk
        )
    } catch (error) {
        console.log('Error Completing Trade: ', error)
    }
} 