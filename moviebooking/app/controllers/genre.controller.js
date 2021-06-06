const db = require("../models");
const Genre = db.genre;

exports.findAllGenre = (req, res) => {
  Tutorial.find({})
    .select("genre")
    .distinct("genre")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Internal error occured",
      });
    });
};
