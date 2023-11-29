const UpcomingCamps = require("../../models/UpcomingCamps");

const addUpcomingCamps = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const upcomingCamp = req.body;
    const result = await UpcomingCamps.create(upcomingCamp);
    res
      .status(200)
      .send({ message: "Upcoming Camp added successfully", result });
  } catch (error) {
    next(error);
  }
};

module.exports = addUpcomingCamps;
