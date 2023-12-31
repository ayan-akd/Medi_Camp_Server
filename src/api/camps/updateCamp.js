const Camps = require("../../models/Camps");

const updateCamp = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { id } = req.params;
    const camp = await Camps.findById(id);
    if (!camp) {
      return res.status(404).send({ message: "Camp not found" });
    }
    const result = await Camps.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ message: "Camp updated successfully", result });
  } catch (error) {
    next(error);
  }
};

module.exports = updateCamp;
