const {createUsers} = require('../controllers/userController/createUsers')
const {deleteUsers} = require('../controllers/userController/deleteUsers')
const { showAllUsers } = require('../controllers/userController/showAllUsers')


const router = require('express').Router()

router.post('/',createUsers)
router.delete('/:id',deleteUsers)
router.get("/",showAllUsers)

module.exports = router