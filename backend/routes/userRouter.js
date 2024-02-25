const {createUsers} = require('../controllers/userController/createUsers')
const {deleteUsers} = require('../controllers/userController/deleteUsers')
const { loginUser } = require('../controllers/userController/loginUsers')
const { showAllUsers } = require('../controllers/userController/showAllUsers')
const { updateUsers } = require('../controllers/userController/updateUsers')
const userProfile = require('../controllers/userController/userProfile')
const authorization = require('../middleware/auth')

const router = require('express').Router()

router.post('/',createUsers)
router.delete('/:id',deleteUsers)
router.get("/",showAllUsers)
router.put("/:id",updateUsers)
router.post("/login",loginUser)
router.get('/profile',authorization,userProfile)

module.exports = router