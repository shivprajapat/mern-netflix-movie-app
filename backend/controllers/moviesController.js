const env = require("../config/envConfig");
const CryptoJS = require("crypto-js");
const User = require("../models/User");

// @desc    Get All Movies
// @route   GET /api/v1/movies
// @access  Private
const getMovie = async (req, res) => {
    res.status(200).json({ message: "all movies request" });
}

// @desc    Set Movie
// @route   POST /api/v1/auth
// @access  Private
const setMovie = async (req, res) => {
    res.status(200).json({ message: "set movie request" });
}

// @desc    Get Find Movie
// @route   GET /api/v1/movies/find/:id
// @access  Private
const getMovieID = async (req, res) => {
    res.status(200).json({ message: "get movie id request", id: req.params.id });
}

// @desc    Get Random
// @route   GET /api/v1/movies/random
// @access  Private

const getRandom = async (req, res) => {
    res.status(200).json({ message: "random request" });
}

// @desc    Update Movie
// @route   PUT /api/v1/movies/:id
// @access  Private

const updateMovie = async (req, res) => {
    res.status(200).json({ message: "movie update request" });
}

// @desc    Delete Movie
// @route   DELETE /api/v1/movies
// @access  Private

const deleteMovie = async (req, res) => {
    res.status(200).json({ message: "movie delete request" });
}

module.exports = {
    getMovie,
    setMovie,
    getRandom,
    getMovieID,
    updateMovie,
    deleteMovie
}