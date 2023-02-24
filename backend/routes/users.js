const router = require("express").Router();
const {
  getUser,
  getStats,
  getUserID,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const verify = require("../middleware/authMiddleware");

// ! Users

router.get("/", verify, getUser);
router.get("/stats", getStats);
router.get("/find/:id", getUserID);
router.route("/:id").put(verify, updateUser).delete(verify, deleteUser);

module.exports = router;
