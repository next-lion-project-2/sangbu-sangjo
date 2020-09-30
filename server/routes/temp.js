const mysql = require('mysql2')
const express = require("express");
const config = require('../config');
const connection = mysql.createConnection(config.dbconfig);
//파일 이름 뭐로 할지 몰라서 일단 Temp로 했어요
const router = new express.Router()

router.get('/', (req, res) => {
    connection.query('SELECT * FROM user', async (error, rows) => {
        if (error) throw error;
        res.send(rows)
      });
})

module.exports = router;