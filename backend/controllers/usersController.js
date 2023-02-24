const env = require("../config/envConfig");

// @desc    Get All Users
// @route   GET /api/v1/users
// @access  Public
const getUser = async (req, res) => {
    res.send({ message: "get user" })
}

// @desc    Get Find User
// @route   GET /api/v1/users/find/:id
// @access  Public
const getUserID = async (req, res) => {
    res.send({ message: "get user id" })
}

// @desc    Get Stats
// @route   GET /api/v1/users/stats
// @access  Public

const getStats = async (req, res) => {
    res.send({ message: "get stats" })
}

// @desc    Update User
// @route   PUT /api/v1/users/:id
// @access  Public

const updateUser = async (req, res) => {
    res.send({ message: " update user" })
}

// @desc    Delete User
// @route   DELETE /api/v1/users
// @access  Public

const deleteUser = async (req, res) => {
    res.send({ message: "delete user" })
}

module.exports = {
    getUser,
    getStats,
    updateUser,
    deleteUser,
    getUserID
}