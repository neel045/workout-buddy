const express = require("express")
const userContoller = require("../controllers/userController")

const router = express.Router()

//login route

router.post("/login", userContoller.login)
router.post("/signup", userContoller.signup)

//signup route

module.exports = router
