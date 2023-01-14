const router = require("express").Router();
const { getRegister } = require("../controllers/authController");

router.post('/register', getRegister)
module.exports = router;