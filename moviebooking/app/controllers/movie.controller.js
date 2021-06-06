const db = require("../models");
const Movie = db.movie;

exports.findAllMovies = (req, res) => {
  Tutorial.find({})
    .select("movies")
    .distinct("movies")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Internal error occured",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById({ _id: id })
    .then((data) => {
      if (!data) res.status(404).send({ message: "Movie Not found " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving This Movie with id=" + id });
    });
};

exports.findShow = (req, res) => {
  const id = req.params.id;

  Movie.findById({ _id: id })
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Shows of Movie with id " + id });
      else res.send(data.shows);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Shows with id=" + id });
    });
};