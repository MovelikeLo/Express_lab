const express = require('express');
const router = express.Router();
const {readFile,writeFile} = require('fs').promises
router.get('/',(req,res)=>{
    res.send('Word Homepage');
});
router.get('/wotd',async (req,res)=>{
    let wordArray =  await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    res.render('wotd',{word:word,part:part,defn:definition});
});
router.get('/allwords',async (req,res)=>{
    const data = await readFile('resources/allWords.txt', 'utf-8');
    let lines = data.split('\n');
    let allWords = lines.map(line => {
        return line.split('\t');
    });
    allWords.sort(); // alphabetical by word
    res.render('allwords', { words: allWords });
});

let getWordFromDictionary = async () => {
    try {
   const data = await readFile('resources/allWords.txt', 'utf-8');
   let lines = data.split('\n');
   let randomIndex = parseInt(Math.random() * lines.length);
   let randomLine = lines[randomIndex];
   let wordArray = randomLine.split('\t');
   console.log(wordArray);
   return wordArray;
    } 
    catch (err) {
        console.log("there was an error:",err);
    }
};

module.exports = router;