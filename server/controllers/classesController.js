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
    if (!(await schema.isValid)) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const classExist = await Classes.find({
      classroom: req.body.classroom,
      instructors: req.body.instructors,
      host: req.body.host,
      account: req.body.account,
      day: req.body.day,
    });
    if (classExist) {
      return res.status(400).json({ error: "Sala já existe" });
    }
    try {
      const {
        classroom,
        instructors,
        host,
        account,
        day,
        schedule,
      } = await Classes.create(req.body);

      return res.json({ classroom, instructors, host, account, day, schedule });
    } catch (err) {
      return res.status(401).json({ error: "Erro interno" });
    }
  }
  async index(req, res) {
    const data = await Classes.find({});

    return res.json(data);
  }
}

module.exports = new ClassesController();
