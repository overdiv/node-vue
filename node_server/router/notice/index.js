const express = require('express')
const router = express.Router()
const connection = require('../config/database.js')

router.get('/list', (req, res) => {
  console.log('[[[[ NOTICE LIST ]]]]')
});

connection.query('SELECT * FROM TB_NOTICE', (err, rows) => {
  if(err) return res.status(401).json({
    err : '에러발생'
  })
  if(rows.length){
    console.log(rows)
  }
})

router.post('/register', (req, res) => {
  console.log('[[[[[ NOTICE REGISTER]]]]]');

  const form = req.body.form

  const {
    subj,
    dpTp,
    init,
    conts
  } = form



  console.log(form);
  console.log(dpTp)
  console.log(subj)
  // dpTp query err
  connection.query(`INSERT INTO TB_NOTICE
                    (
                       SUBJ
                      , INIT
                      , CONTS
                      , REGR
                      , REG_DT
                      , URDR
                      , UPD_DT
                      )
                      VALUES
                      (
                          ?
                        , ?
                        , ?
                        , 'admin'
                        , now()
                        , 'admin'
                        , now()
                      )`, [ subj, init+'', conts], (err, rows) => {
    console.log('rows =', rows);
    console.log('rows =', err);

    if (err) return res.status(401).end(JSON.stringify({
      err: '에러발생'
    }))

    if (rows.affectedRows > 0) {

      const resData = {}

      resData.insertId = rows.insertId
      resData.ok = true

      res.status(200)
      res.end(JSON.stringify(resData))
    }
  })
})

module.exports = router