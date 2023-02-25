const router = require("express").Router();
const { getList, setList, deleteList } = require("../controllers/listsController");
const verify = require("../middleware/authMiddleware");

// ! Lists

router.route("/",).post(verify, setList).get(verify, getList);
router.delete("/:id", verify, deleteList)

module.exports = router;