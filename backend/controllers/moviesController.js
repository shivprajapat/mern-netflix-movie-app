const Movie = require("../models/Movie");
const status = require('../helper/api.responses')

// @desc    Get All Movies
// @route   GET /api/v1/movies
// @access  Private
const getMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find()
            res.status(status.OK).json(movies.reverse());
        } catch (error) {
            res.status(status.InternalServerError).json(error)
        }
    }

}

// @desc    Set Movie
// @route   POST /api/v1/movies
// @access  Private
const setMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const saveMovie = await newMovie.save()
            res.status(status.OK).json(saveMovie);

        } catch (error) {
            res.status(status.InternalServerError).json(error);
        }
    }
    else {
        res.status(status.Forbidden).json("You are not allowed!");
    }
}

// @desc    Get Find Movie
// @route   GET /api/v1/movies/find/:id
// @access  Private
const getMovieID = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(status.OK).json(movie);
    } catch (error) {
        res.status(status.InternalServerError).json(error)
    }
}

// @desc    Get Random
// @route   GET /api/v1/movies/random
// @access  Private

const getRandom = async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(status.OK).json(movie);
    } catch (err) {
        res.status(status.InternalServerError).json(err);
    }
}

// @desc    Update Movie
// @route   PUT /api/v1/movies/:id
// @access  Private

const updateMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(status.OK).json(updatedMovie);
        } catch (err) {
            res.status(status.InternalServerError).json(err);
        }
    } else {
        res.status(status.Forbidden).json("You are not allowed!");
    }
}

// @desc    Delete Movie
// @route   DELETE /api/v1/movies
// @access  Private

const deleteMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(status.OK).json("The movie has been deleted...");
        } catch (error) {
            res.status(status.InternalServerError).send(error)
        }
    }
    else {
        res.status(status.Forbidden).json("You are not allowed!");
    }
}

module.exports = {
    getMovie,
    setMovie,
    getRandom,
    getMovieID,
    updateMovie,
    deleteMovie
}