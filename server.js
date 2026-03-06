const express = require('express')
const app = express();
const userRouter = require('./routes/user');

//const wordsRouter = require('./routes/words');
const myWordRouter = require('./routes/words')
app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/users',userRouter);
app.use('/words',myWordRouter);
app.get('/',(req,res)=>{
    console.log('Here');
    res.render('index',{userName:'Loic'});
}
);
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(3030);
