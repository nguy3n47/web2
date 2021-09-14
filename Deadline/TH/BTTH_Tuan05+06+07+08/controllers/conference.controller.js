const Conference = require("../models/conference");

exports.getAll = async (req, res, next) => {
  try {
    if (req.session.userId) {
      let conferences = req.session.userId
        ? await Conference.findAll({
            order: [["id", "DESC"]],
          })
        : [];
      return res.render("admin/conference", { conferences });
    } else {
      return res.redirect("auth/login");
    }
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conference = await Conference.findByPk(id);
    return res.json({ conference: conference });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    await Conference.create(data);
    return res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const conference = await Conference.findByPk(id);
    await conference.update(newData);
    return res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conference = await Conference.findByPk(id);
    await conference.destroy();
    return res.json({ success: true });
  } catch (error) {
    next(error);
  }
};
