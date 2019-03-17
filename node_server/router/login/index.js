const express = require('express')
const router = express.Router()
const connection = require('../config/database.js')
const crypto = require('crypto')
const auth = require('../auth')

router.post('/', (req, res) => {
    console.log('req.body = ', req.body)

    const id = req.body.userInfo.username
    let pw = req.body.userInfo.password
    let result = false

    connection.query(`SELECT LOGIN_ID, LOGIN_PW, SALT FROM TB_MBR WHERE LOGIN_ID = ?`
        , [id]
        , (err, rows) => {
    
      if (err) return res.status(401).json({err:'에러발생'});
      console.log('salt: ', rows[0].SALT);
      console.log('pw: ', rows[0].LOGIN_PW);

      crypto.pbkdf2(pw, rows[0].SALT, 100000, 64, 'sha512', (err, key) => {
        // 결과값 반환
        console.log('password: ', key.toString('base64'));
        pw = key.toString('base64')

        // resolve(password)
        result = pw === rows[0].LOGIN_PW
        console.log(result)
        console.log('변환 후 pw: ', pw)
        console.log('데이터베이스 받은 pw: ', rows[0].LOGIN_PW)

        if (result) {
          console.log('token info: ', auth.signToken(rows[0].LOGIN_ID));
          const resData = {}
          resData.ok = true
          resData.body = auth.signToken(rows[0].LOGIN_ID)

          res.status(200)
          res.json(resData)

        } else {
          return res.status(401).json({err: '일치하는 정보가 없습니다'})
        }
        
      })

  })
})


module.exports = router