import { Pool } from "pg";

let conn;

if (!conn) {
    conn = new Pool({
        user: "",
        password: "EMVsolo2022",
        host: "localhost",
        port: 5432,
        database: "emv",
    });
}

export default conn;