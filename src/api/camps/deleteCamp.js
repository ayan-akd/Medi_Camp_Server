const Camp = require("../../models/Camps");

const deleteCamp = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { id } = req.params;
    const camp = await Camp.findByIdAndDelete(id);
    if (!camp) {
      return res.status(404).send({ message: "Camp not found" });
    }
    res.status(200).send({ message: "Camp deleted successfully", camp });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteCamp;
