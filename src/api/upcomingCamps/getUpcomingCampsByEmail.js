const UpcomingCamps = require("../../models/UpcomingCamps");

const getUpcomingCampsByEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    const upcomingCampsByEmail = await UpcomingCamps.find({ hostEmail: email });
    res.status(200).send(upcomingCampsByEmail);
  } catch (error) {
    next(error);
  }
};

module.exports = getUpcomingCampsByEmail;
