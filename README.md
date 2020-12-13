<img src="https://file.coffee/u/QOM9iZY73p.png" width="250" />

TaimaDB is a fast, reliable and modern SQL implementation and it offers managing databases with zero clutter.
Also, TaimaDB is written in pure, light JavaScript using the last implementations of TypeScript.

- 🚀 Fastest SQL ever in a JavaScript library
- 💼 Modern and light asynchronous syntax
- 🧵 Both support for MySQL and MariaDB
- 📚 High compatibility with await functions

# Getting started

**Install**
```bash
$ npm install taimadb
```

**Usage**
```js
const taima = require('taimadb')

const db = new taima.Pool({
    host: '',
    user: '',
    password: '',
    port: 3306, // only for MySQL (mariadb is another)
    db: ''
})
db.connect()

db.query('CREATE TABLE IF NOT EXISTS users (id NUMERIC, name TEXT, age NUMERIC)') // both uppercase and lowercase are allowed

// select only works into an asynchronous function.
async function asynchronousCall(){
    let obj = await db.query('SELECT * FROM users WHERE id = 1')
    console.log(obj[0].name) 
}

asynchronousCall() // -> returning "Murray"
```
# Contributing
There are many ways to contribute to **TaimaDB**:
First, you need to know that TaimaDB is run by Softdrink and not TaimaDB Foundation.
TaimaDB Foundation is intented to attract people to use TaimaDB.

So, if you want to contribute with TaimaDB, you need to go to the official GitHub repository:
- Submit bugs and help us verify fixes as they are checked in.
- Review the source code changes.
- Help each other in the [Softdrink Corporation official Discord group.](https://discord.gg/GNE9F6Ysck)

# Licenses
**TaimaDB** is available on its GitHub repository and it is legally free of any modification and redistribution, but the liberty ends if your redestributed service is displacing/replacing the official TaimaDB services.
TaimaDB is written and developed under the [Apache 2.0 License](https://apache.org/licenses/LICENSE-2.0).
