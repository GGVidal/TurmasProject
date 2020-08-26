const Classes = require("../models/classes");
const yup = require("yup");

class ClassesController {
  async store(req, res) {
    const schema = yup.object().shape({
      classroom: yup.string().required(),
      instructors: yup.array().required(),
      host: yup.string().required(),
      account: yup.string().required(),
      day: yup.string().required(),
      schedule: yup.object().shape({
        start: yup.string().required(),
        finish: yup.string().required(),
      }),
    });
    const data = await Classes.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Classes.find({});

    return res.json(data);
  }
}

module.exports = new ClassesController();
