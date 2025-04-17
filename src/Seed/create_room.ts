import Knex from 'knex';

export async function seed (knex: Knex){
    await knex('rooms').insert([
        { name: 'Teste a sala', building: 'Teste criado!!'}
    ]);
}