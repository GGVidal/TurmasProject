const Classes = require("../models/classes");
const yup = require("yup");

class ClassesController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().strict().required(),
      class_info: yup.object().shape({
        day: yup.string().required(),
        disciplines: yup.array().required(), //todo validate object inside array
      }),
      zoom: yup.object().shape({
        room: yup.string().required(),
        host: yup.string().required(),
        account: yup.string().required(),
      }),
      schedule: yup.object().shape({
        start: yup.string().required(),
        finish: yup.string().required(),
      }),
    });
    if (!(await schema.isValid)) {
      return res.status(400).json({ error: "Validação falhou" });
    }

    const classExist = await Classes.find({
      name: req.body.name,
    });
    if (classExist.length > 0) {
      return res.status(400).json({ error: "Sala já existe" });
    }
    try {
      const { name, class_info, zoom, schedule } = await Classes.create(
        req.body
      );

      return res.json({ name, class_info, zoom, schedule });
    } catch (err) {
      return res.status(401).json({ error: "Erro interno" });
    }
  }
  async index(req, res) {
    const data = await Classes.find({});

    return res.json(data);
  }
  async remove(req, res) {
    const { id } = req.params;

    const deletedClass = Classes.findByIdAndDelete(id);

    return res.json(deletedClass);
  }
}

module.exports = new ClassesController();
