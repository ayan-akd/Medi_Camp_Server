const UpcomingCamps = require("../../models/UpcomingCamps");

const getUpcomingCamps = async (req, res, next) => {
  try {
    const upcomingCamps = await UpcomingCamps.find();
    res.status(200).send(upcomingCamps);
  } catch (error) {
    next(error);
  }
};

module.exports = getUpcomingCamps;
