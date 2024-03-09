const express = require("express");
const { authenticateUser } = require("../middlewares/userMiddleware");
const { storeLocation, retrieveLocation } = require("../controllers/locationController");

const router = express.Router();

router.post('/', authenticateUser, storeLocation);
router.get('/:id', authenticateUser, retrieveLocation);

module.exports = router