const mariadb = require('mariadb')

function Pool(ops){
    h = ops.host
    u = ops.user
    p = ops.password
    p2 = ops.port
    d = ops.db
    const pool = mariadb.createPool({
        host: h,
        user: u,
        password: p,
        port: p2,
        database: d
    })
}

Pool.prototype.connect = function (){
    const pool = mariadb.createPool({
        host: h,
        user: u,
        password: p,
        port: p2,
        database: d
    })
    pool.getConnection()
}

Pool.prototype.query = async function(stmt) {
    if (stmt.includes('SELECT')){
        const pool = mariadb.createPool({
            host: h,
            user: u,
            password: p,
            port: p2,
            database: d
        })
    
         let conn = await pool.getConnection()
            return conn.query(stmt)
    }
    
    const pool = mariadb.createPool({
                host: h,
                user: u,
                password: p,
                port: p2,
                database: d
            })
            pool.getConnection()
            .then(conn => {
                conn.query(stmt)
            })
}

module.exports = {
    Pool
}