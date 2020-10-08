const express = require("express");

const routes = express.Router();
const ClassesController = require("../controllers/classesController");

routes.get("/classes", ClassesController.index);

routes.post("/classes", ClassesController.store);

routes.delete("/classes/:id", ClassesController.remove);

module.exports = routes;
