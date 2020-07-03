const { createUser,
        getUsers,
        getUsersById,
        updateUser,
        deleteUser
} = require("./user.controller")

const router = require("express").Router()

router.get('/', getUsers)
router.get('/:id', getUsersById)
router.post('/', createUser)
router.patch('/', updateUser)
router.delete('/', deleteUser)

module.exports = router