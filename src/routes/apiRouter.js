const express = require('express');
const { Client } = require('../models/Client')
const webpush = require('web-push')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ola')
});

router.post('/subscribe', (req, res) => {
    const body = req.body
    const clients = new Client()

    try {
      clients.push(body.subscriptor)
    } catch (e) {
      console.log(e);
    }
    console.log(clients.getList())
    res.send('jeje')
});

router.post('/notify', (req, res) => {
    const body = req.body
    const title = body.title
    const description = body.description
    const link = body.link

    try{
        const clients = new Client()
        console.log(clients.getList())
        clients.getList().forEach(user => {
            console.log(webpush)
            webpush.sendNotification(user, JSON.stringify({title, description, link}))
        })

    } catch(e){
        console.log(e)
    }

    res.send('Fin')
})

module.exports = router