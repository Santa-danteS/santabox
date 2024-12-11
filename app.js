const express = require('express')

const app = express()

const PORT = 5000

app.get('/users/:id', (req, res) => {

    console.log(req.params['id']);

    res.send('Привет, ' + req.params.id )
})

app.post('/reverse', (req, res) => {
    const text = req.body.text; 
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Введённый текст не корректен' });
    }
    const reversedText = text.split('').reverse().join(''); 
    res.json({ reversed: reversedText }); 
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    res.json({ number: randomNumber }); 
});

app.listen(PORT, ()=> {
    console.log('server start ' + PORT)
})