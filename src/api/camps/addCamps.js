const Camp = require("../../models/Camps");

const addCamp = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const camp = req.body;
    const result = await Camp.create(camp);
    res.status(200).send({ message: "Camp added successfully", result });
  } catch (error) {
    next(error);
  }
};
module.exports = addCamp;
