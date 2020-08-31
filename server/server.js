const express = require("express");
const db = require("./config/database");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001 `)
    );
  }

  database() {
    try {
      mongoose.connect(db.uri, { useNewUrlParser: true });
    } catch (err) {
      console.log(err);
    }
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
