const UpcomingCamps = require("../../models/UpcomingCamps");

const getUpcomingCampsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camp = await UpcomingCamps.findById(id);
    res.status(200).send(camp);
  } catch (error) {
    next(error);
  }
};

module.exports = getUpcomingCampsById;