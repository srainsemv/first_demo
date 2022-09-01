import {User} from "../models/post.model";
import { getConnection, createConnection} from "typeorm";

export async function getOrCreateConnection() {
    try {
        const conn = getConnection();
        return conn;
    } catch (e) {
        return createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "",
            password: "EMVsolo2022",
            database: "emv",
            entities: ["src/entities/*{.js,.ts}"], // typeorm loads entities from this directory,
            synchronize: true,
            logging: false
        });
    }
}