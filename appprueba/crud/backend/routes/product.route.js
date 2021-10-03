let express = require("express");
let productRoute = express.Router();


productRoute.route("/hola").get((req, res) => res.send("bienvenido"));

module.exports = productRoute;