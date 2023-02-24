const router = require("express").Router();
const { getUser, getStats, getUserID, updateUser, deleteUser, } = require("../controllers/usersController");

// ! Users

router.get('/', getUser);
router.get('/stats', getStats);
router.get('/find/:id', getUserID);
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router;
