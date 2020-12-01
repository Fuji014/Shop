const express = require("express");

// config
const router = express.Router();

// controller
const { authUser } = require("../controllers/user.controller");

// routes
router.post("/users/login", authUser);

// export
module.exports = router;
