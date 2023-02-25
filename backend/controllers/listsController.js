const List = require("../models/List");

// @desc    Get List
// @route   GET /api/v1/lists
// @access  Private
const getList = async (req, res) => {
    res.status(200).json("get List request!");
}

// @desc    Set List
// @route   POST /api/v1/lists
// @access  Private
const setList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const saveList = await newList.save()
            res.status(200).json(saveList);
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

// @desc    Delete List
// @route   DELETE /api/v1/lists
// @access  Private

const deleteList = async (req, res) => {
    res.status(200).json("delete List request!");
}

module.exports = {
    getList, setList, deleteList
}