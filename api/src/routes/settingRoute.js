const express = require('express');
const { editProfile, deleteProfile, changePassword, upload, uploadPicture, deletePicture } = require('../controllers/settingController');
const { authenticateUser } = require("../middlewares/userMiddleware");

const router = express.Router()


// EDIT
router.put('/:id/edit', authenticateUser, editProfile);
router.post('/:id/upload-picture', authenticateUser, upload.single('profilePicture'), uploadPicture);
router.delete('/:id/delete-picture', authenticateUser, deletePicture);
router.put('/:id/change-password', authenticateUser, changePassword);
router.delete('/:id', authenticateUser, deleteProfile);


module.exports = router