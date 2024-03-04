const express = require("express");
const { registerUser, userLogin, userProfile } = require("../controllers/authController");
const { authenticateUser } = require("../middlewares/userMiddleware");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", userLogin);
router.get("/profile/:id", authenticateUser, userProfile)

module.exports = router
