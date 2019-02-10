const express = require('express')
const router = express.Router()
const connection = require('../config/database.js')

router.get('/list', (req, res) => {

  console.log('[[[[ NOTICE LIST ]]]]')

  connection.query(
    `SELECT 
            NOTICE_TP,
            INIT,
            SUBJ, 
            CONTS, 
            REGR, 
            DATE_FORMAT(REG_DT, "%Y-%m-%d %H:%i") REG_DT, 
            URDR, 
            DATE_FORMAT(UPD_DT, "%Y-%m-%d %H:%i") UPD_DT 
            FROM TB_NOTICE ORDER BY NOTICE_MMG_NO 
            DESC`
    // `SELECT 
    //                   NOTICE_MNG_NO
    //                 , NOTICE_TP
    //                 , SUBJ
    //                 , CONTS
    //                 , REGR
    //                 , DATE_FORMAT(REG_DT, "%Y-%m-%d %H:%i") REG_DT
    //                 , URDR
    //                 , DATE_FORMAT(UPD_DT, "%Y-%m-%d %H:%i") UPD_DT
    //                 FROM TB_NOTICE
    //                 ORDER BY NOTICE_MNG_NO DESC`
    , (err, rows) => {
    if(err) return res.status(401).json({
      err : '에러발생'
    })
    
    if(rows.length){
      console.log(rows)
  
      const resData = {}

      resData.ok = true;
      resData.body = rows;

      res.status(200)
      res.json(resData)
    }

  })
});



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