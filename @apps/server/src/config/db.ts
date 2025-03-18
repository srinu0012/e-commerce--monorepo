import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
import * as db from "./env.js";

dotenv.config();

const pool = new Pool({
  user: db.getDbUser(),
  host: db.getDbHost(),
  database: db.getDbName(),
  password: db.getDbPaswword(),
  port: db.getDbPort(),
});

export default pool;
