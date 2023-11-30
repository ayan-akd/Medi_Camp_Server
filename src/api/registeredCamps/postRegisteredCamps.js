const registeredCamps = require("../../models/RegisteredCamps");

const postRegisteredCamps = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const newRegisteredCamp = req.body;
    const existingRegisteredCamp = await registeredCamps.findOne({
      campId: newRegisteredCamp.campId,
      email: newRegisteredCamp.email,
    });
    if (existingRegisteredCamp) {
      res.status(409).send({ message: "Already registered for this camp" });
      return;
    } else {
      const result = await registeredCamps.create(newRegisteredCamp);
      res
        .status(200)
        .send({ message: "Registered Camp added successfully", result });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = postRegisteredCamps;
