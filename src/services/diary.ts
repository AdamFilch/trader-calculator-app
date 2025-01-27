import { useSQLiteContext } from "expo-sqlite"
import { RenameDiaryPayload } from "../lib/interfaces/diary"

const db = useSQLiteContext()


export async function NewDiary() {
    const query = `INSERT INTO TRADING_REPORT_T ()`
    await db.runAsync(query)
}



export async function RenameDiary(payload: RenameDiaryPayload) {
    try {
        const query = await db.runAsync(`
            UPDATE 
                TRADING_REPORT_T 
            SET 
                report_name = (?), 
                report_primary_currency = (?) 
            WHERE 
                report_id_pk = (?)`, 
            payload.report_name, 
            payload.report_primary_currency, 
            payload.report_id_pk)
    } catch (error) {
        console.log('Error Updating Diary: ', error)
    }
}