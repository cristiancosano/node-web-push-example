const express = require('express');
const router = express.Router();


router.use('/form', (req, res) => {
    res.render('form.ejs')
})


module.exports = router