const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Word Homepage');
});
router.get('/wotd',(req,res)=>{
    res.send(`Here's the Word of the Day`);
});
module.exports = router;