const Classes = require("../models/classes");

class ClassesController {
  async store(req, res) {
    const data = await Classes.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Classes.find({});

    return res.json(data);
  }
}

module.exports = new ClassesController();
