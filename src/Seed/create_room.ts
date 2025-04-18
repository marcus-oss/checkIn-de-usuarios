import Knex from 'knex';

//criando uma sala 
export async function seed (knex: Knex){
    await knex('rooms').insert([
        { name: 'Teste a sala', building: 'Teste criado!!'}
    ]);
}