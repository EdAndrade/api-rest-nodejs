const { createUser,
        getUsers,
        getUsersById,
        updateUser,
        deleteUser,
        login
} = require("./user.controller")

const router = require("express").Router()
const { checkToken } = require("../../auth/token_validation")

router.get('/', checkToken, getUsers)
router.get('/:id', checkToken, getUsersById)
router.post('/', checkToken, createUser)
router.patch('/', checkToken, updateUser)
router.delete('/', checkToken, deleteUser)
router.post('/login', login)

module.exports = router