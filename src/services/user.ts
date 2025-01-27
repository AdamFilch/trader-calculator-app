import { useSQLiteContext } from "expo-sqlite"

const db = useSQLiteContext()


async function NewUser(userid: string) {
    const insertUser = db.prepareAsync(`INSERT INTO USER_T (user_id_pk) values(?)`)

    try {
        (await insertUser).executeAsync(userid)
    } catch (error) {
        console.log('Error Creating New User: ', error)
    }
}