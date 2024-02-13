const {createUsers} = require('../controllers/userController/createUsers')
const {deleteUsers} = require('../controllers/userController/deleteUsers')
const { showAllUsers } = require('../controllers/userController/showAllUsers')
const { updateUsers } = require('../controllers/userController/updateUsers')


const router = require('express').Router()

router.post('/',createUsers)
router.delete('/:id',deleteUsers)
router.get("/",showAllUsers)
router.put("/:id",updateUsers)

module.exports = router