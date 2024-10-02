

------------------------------ USER_T ------------------------------
CREATE TABLE USER_T (
    user_id_pk CHAR(6) NOT NULL,
    PRIMARY KEY (user_id_pk)
);


------------------------------ TRADING_REPORT_T ------------------------------
CREATE TABLE IF NOT EXISTS IF NOT EXISTS TRADING_REPORT_T (
    report_id_pk INTEGER PRIMARY KEY AUTOINCREMENT,
    report_name VARCHAR(30) NOT NULL,
    report_date_created DATETIME NOT NULL,
    report_primary_currency CHAR(3),
    user_id_fk CHAR(6) NOT NULL,
    FOREIGN KEY (user_id_fk) REFERENCES USER_T(user_id_pk)
);




------------------------------ REPORT_SUMMARY_T ------------------------------
CREATE TABLE IF NOT EXISTS REPORT_SUMMARY_T (
    repsum_id_pk INTEGER PRIMARY KEY AUTOINCREMENT,
    report_id_fk INTEGER NOT NULL,
    repsum_start_date DATETIME,
    repsum_end_date DATETIME,
    repsum_total_earn DECIMAL(10, 2) NOT NULL,
    repsum_total_trades INTEGER NOT NULL,
    repsum_total_winrate DECIMAL(5, 2) NOT NULL,
    repsum_wins INTEGER NOT NULL,
    repsum_losses INTEGER NOT NULL,
    FOREIGN KEY (report_id_fk) REFERENCES TRADING_REPORT_T(report_id_pk)
);




------------------------------ TRADE_T ------------------------------
CREATE TABLE IF NOT EXISTS TRADE_T (
    trade_id_pk INTEGER PRIMARY KEY AUTOINCREMENT,
    trade_invested DECIMAL(15, 2) NOT NULL,
    trade_profit DECIMAL(15, 2),
    trade_realised DECIMAL(15, 2),
    trade_plus_minus CHAR(6),
    trade_bought_for DECIMAL(15, 2) NOT NULL,
    trade_sold_for DECIMAL(15, 2),
    trade_lot_size DECIMAL(15, 2) NOT NULL,
    trade_date_bought DATETIME NOT NULL,
    trade_date_sold DATETIME,
    trade_earn_per_day DECIMAL(15, 2),
    trade_stock_code VARCHAR(10) NOT NULL,
    report_id_fk INTEGER NOT NULL,
    FOREIGN KEY (report_id_fk) REFERENCES TRADING_REPORT_T(report_id_pk)
);





------------------------------ TRANSACTION_FEE_T ------------------------------
CREATE TABLE IF NOT EXISTS TRANSACTION_FEE_T (
    trans_id_pk INTEGER PRIMARY KEY AUTOINCREMENT,
    trade_id_fk INTEGER NOT NULL,
    trans_fee_sell DECIMAL(6, 2) NOT NULL,
    trans_fee_buy DECIMAL(6, 2) NOT NULL,
    FOREIGN KEY (trade_id_fk) REFERENCES TRADE_T(trade_id_pk)
);






