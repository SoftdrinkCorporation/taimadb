const TaimaClient = require('../lib/index')

const db = new TaimaClient.Pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'aidak1234',
    port: 3306,
    db: 'taima_employees'
})

db.connect()

db.query('CREATE TABLE IF NOT EXISTS users (id NUMERIC, name TEXT, age NUMERIC)')

db.query('INSERT INTO users (id, name, age) VALUES (1, "Murray", 32)')

// select only works into an asynchronous function.
async function asynchronousCall(){
    let o = await db.query('SELECT * FROM users WHERE id = 1')
    console.log(o[0].name)
}

asynchronousCall() // -> Murray
