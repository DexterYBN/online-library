const { Router } = require("express")
const { userController } = require('../controllers/users.controller')

const router = Router()

router.post("/users", userController.postUsers)
router.get("/users", userController.getUsers)
router.delete("/users/:id", userController.deleteUsers)
router.patch("/users/:id", userController.patchUsers)

module.exports = router