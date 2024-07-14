
import SQL from '@linked-db/linked-ql/sql';
import pg from 'pg';
const pgClient = new pg.Client({
    host: 'localhost',
    port: 5432,
});
await pgClient.connect();
const lqlClient = new SQL(pgClient, { dialect: 'postgres' });

export default async function( event, data, next ) {
    if ( next.pathname && next.stepname !== 'about' ) return next();
    console.log('-------------------------', await lqlClient.databases());
    return {
        title: next.stepname === 'about' ? 'About - Hello World!' : 'Home - Hello World!',
    };
}