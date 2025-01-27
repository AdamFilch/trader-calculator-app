
export type RenameDiaryPayload = {
    report_name: string,
    report_primary_currency: string,
    report_id_pk: string,
}


export type NewDiaryPayload = {
    report_id_pk: string,
    report_name: string,
    report_date_created: string,
    report_primary_currency: string,
    user_id_fk: string,
}