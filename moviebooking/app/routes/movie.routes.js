module.exports = (app) => {
  const movie = require("../controllers/movie.controller.js");

  var router = require("express").Router();

  router.get("/movie", movie.findAllMovies);
  router.get("/movie/:published", movie.findAllMovies);
  router.get("/movie/:released", movie.findAllMovies);
  router.get("/movie/:id", movie.findOne);
  router.get(
    "/movie/:id/:title/:genre/:artist/:release_date/:publish_date",
    movie.findShow
  );
  app.use("/api",router);
};
