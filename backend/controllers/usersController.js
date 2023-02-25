const env = require("../config/envConfig");
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const status = require('../helper/api.responses')

// @desc    Get All Users
// @route   GET /api/v1/users
// @access  Private
const getUser = async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
            res.status(status.OK).json(users);
        } catch (err) {
            res.status(status.InternalServerError).json(err);
        }
    } else {
        res.status(status.Forbidden).json("You are not allowed to see all users!");
    }
}

// @desc    Get Find User
// @route   GET /api/v1/users/find/:id
// @access  Private
const getUserID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(status.OK).json(info);
    } catch (err) {
        res.status(status.InternalServerError).json(err);
    }
}

// @desc    Get Stats
// @route   GET /api/v1/users/stats
// @access  Private

const getStats = async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(status.OK).json(data)
    } catch (err) {
        res.status(status.InternalServerError).json(err);
    }
}

// @desc    Update User
// @route   PUT /api/v1/users/:id
// @access  Private

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
            res.status(status.OK).json(updateUser)
        } catch (error) {
            res.status(status.InternalServerError).json(error)
        }
    }
}

// @desc    Delete User
// @route   DELETE /api/v1/users
// @access  Private

const deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(status.OK).json("User has been deleted...");
        } catch (err) {
            res.status(status.InternalServerError).json(err);
        }
    } else {
        res.status(status.Forbidden).json("You can delete only your account!");
    }
}

module.exports = {
    getUser,
    getStats,
    updateUser,
    deleteUser,
    getUserID
}