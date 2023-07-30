import { Knex, knex } from "knex";
import config from '../../knexfile'; // adjust the path if needed

const environment: string = process.env.NODE_ENV || 'development';
const configuration: Knex.Config = config[environment];

const db: Knex = knex(configuration);

export default db;