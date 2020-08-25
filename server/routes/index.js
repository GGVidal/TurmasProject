const express = require("express");

const routes = express.Router();
const ClassesController = require("../controllers/classesController");

routes.get("/classes", ClassesController.index);

routes.post("/classes", ClassesController.store);

module.exports = routes;
