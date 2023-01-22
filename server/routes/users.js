

const express = require('express');
const {signin, signup, verification} = require('../controllers/users.js');

const router = express.Router()

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/verification/:hash', verification);


module.exports = router;
