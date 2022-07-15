import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase {
  protected static connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_user,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true,
    },
  });
}
