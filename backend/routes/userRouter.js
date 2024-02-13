const {createUsers} = require('../controllers/userController/createUsers')
const router = require('express').Router()

router.post('/',createUsers)

module.exports = router