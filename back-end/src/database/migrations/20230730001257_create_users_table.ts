import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.string('country').notNullable();
        table.string('favorite_sport').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

