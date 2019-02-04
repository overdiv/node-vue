const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
  console.log('[[[[[ NOTICE REGISTER]]]]]')
  
	console.log(' REGISTER REQ', req.body.form); 
	const data = '42sd';
	
	res.status(200)
	res.end(data);
	
})

module.exports = router