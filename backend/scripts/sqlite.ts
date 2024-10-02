import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

const initDatabase = async () => {
  const dbName = "trading_diary_db.db";
  const db = await SQLite.openDatabaseAsync(dbName);

  const dbAsset = require("./assets/trader)diary_db.db");
  //   const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
};
