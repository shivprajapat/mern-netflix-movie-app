const env = require("../config/envConfig");
const CryptoJS = require("crypto-js");
const User = require("../models/User");

// @desc    Get All Users
// @route   GET /api/v1/users
// @access  Public
const getUser = async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to see all users!");
    }
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
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                env.SECRET_KEY
            ).toString()
        }
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id, {
                $set: req.body
            }, { new: true }
            )
            res.status(200).json(updateUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }
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