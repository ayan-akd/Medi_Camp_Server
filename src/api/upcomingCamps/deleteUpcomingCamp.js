const UpcomingCamps = require("../../models/UpcomingCamps");

const deleteUpcomingCamp = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { id } = req.params;
    const camp = await UpcomingCamps.findByIdAndDelete(id);
    if (!camp) {
      return res.status(404).send({ message: "Upcoming Camp not found" });
    }
    res
      .status(200)
      .send({ message: "Upcoming Camp deleted successfully", camp });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteUpcomingCamp;
