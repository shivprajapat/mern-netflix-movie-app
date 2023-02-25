const List = require("../models/List");

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
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error)
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
            res.status(201).json(saveList);
        } catch (error) {
            res.status(500).json(error)
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
            res.status(201).json('The list has been delete...');
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

module.exports = {
    getList, setList, deleteList
}