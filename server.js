const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    console.log('Here');
    res.send('Hi')
}
);
app.get('/',(req,res)=>{
    res.status(500).send('Hi')
})
app.listen(3030);
