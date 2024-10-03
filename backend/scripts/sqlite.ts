import * as FileSystem from "expo-file-system";
import { SQLiteDatabase } from "expo-sqlite";
export const dbName = "trading_diary_db.db";

export const initDatabase = async (db: SQLiteDatabase) => {
  const DATABASE_VERSION = 1;

  let currentDBVer = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );

  if (currentDBVer?.user_version) {
    if (currentDBVer?.user_version >= DATABASE_VERSION) {
      //   const dbAsset = require("./assets/trader)diary_db.db");
      //   const dbUri = Asset.fromModule(dbAsset).uri;
      //   const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
    } else if (currentDBVer.user_version == 0) {
      // INIT DB
    }
  }
};
