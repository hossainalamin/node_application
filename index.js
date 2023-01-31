const express = require('express');
const phones = require('./phone.json');
const app = express();
const port = 5000;
app.get('/phones',(req, res) => {
    res.send(phones);
})
app.get('/phones/:id', (req,res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone) 
})
app.listen(port, ()=>{
    console.log(`Example app listen to the port ${port}`)
})