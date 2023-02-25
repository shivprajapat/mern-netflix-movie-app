const User = require("../models/User");
const CryptoJS = require("crypto-js");
const env = require("../config/envConfig");
const jwt = require("jsonwebtoken");
const status = require('../helper/api.responses')

// @desc    Set Register
// @route   POST /api/v1/auth
// @access  Public
const register = async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            env.SECRET_KEY
        ).toString(),
    })
    try {
        const user = await newUser.save()
        res.status(status.OK).json(user)
    } catch (err) {
        res.status(status.InternalServerError).json(err);
    }
}

// @desc    Set Login
// @route   POST /api/v1/auth
// @access  Public

const login = async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(status.Unauthorized).json("Wrong password or username!");

        const bytes = CryptoJS.AES.decrypt(user.password, env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password &&
            res.status(status.Unauthorized).json("Wrong password or username!");

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        )
        const { password, ...info } = user._doc

        res.status(status.OK).json({ ...info, accessToken });
    } catch (err) {
        res.status(status.InternalServerError).json(err);
    }
}

module.exports = { register, login }
