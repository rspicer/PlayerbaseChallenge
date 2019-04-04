module.exports = {
    development: {
        dialect: 'mysql',
        database: 'playerbase_test',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: null
    },
    production: {
        dialect: 'mysql',
        database: 'playerbase',
        username: process.env.PB_DB_USERNAME,
        password: process.env.PB_DB_PWD
    }
}