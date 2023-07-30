import { Knex } from "knex";

interface KnexConfig {
  [key: string]: Knex.Config;
}

const config: KnexConfig = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite3'
    },
    useNullAsDefault: true
  },
};

export default config;
