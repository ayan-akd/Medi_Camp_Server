const registeredCamps = require("../../models/RegisteredCamps");

const deleteRegisteredCamp = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { id } = req.params;
    const deletedCamp = await registeredCamps.findByIdAndDelete(id);
    if (!deletedCamp) {
      return res.status(404).send({ message: "Registered camp not found" });
    }
    res
      .status(200)
      .send({ message: "Registered camp deleted successfully", deletedCamp });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteRegisteredCamp;
