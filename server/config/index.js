require('dotenv').config()

module.exports = {
    port: process.env.PORT,

    dbconfig: {
        host     : 'localhost',
        user     : '',//각자 자기 mysql 유저명 넣어야해용
        password : process.env.PASSWORD,
        database : process.env.DB_NAME
      },

}
