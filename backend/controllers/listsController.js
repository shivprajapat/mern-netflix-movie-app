const List = require("../models/List");
const status = require('../helper/api.responses')

// @desc    Get List
// @route   GET /api/v1/lists
// @access  Private
const getList = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ])
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        }
        else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(status.OK).json(list);
    } catch (error) {
        res.status(status.InternalServerError).json(error)
    }
}

// @desc    Set List
// @route   POST /api/v1/lists
// @access  Private
const setList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const saveList = await newList.save()
            res.status(status.Create).json(saveList);
        } catch (error) {
            res.status(status.InternalServerError).json(error)
        }
    }

}

// @desc    Delete List
// @route   DELETE /api/v1/lists
// @access  Private

const deleteList = async (req, res) => {
    if (req.user.isAdmin) {
        await List.findByIdAndDelete(req.params.id)
        try {
            res.status(status.Create).json('The list has been delete...');
        } catch (error) {
            res.status(status.InternalServerError).json(error)
        }
    } else {
        res.status(status.Forbidden).json("You are not allowed!");
    }
}

module.exports = {
    getList, setList, deleteList
}