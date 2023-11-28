const registeredCamps = require("../../models/RegisteredCamps");

const getRegisteredCamps = async (req, res, next) => {
  try {
    const Camps = await registeredCamps.find();
    res.status(200).send(Camps);
  } catch (error) {
    next(error);
  }
};

module.exports = getRegisteredCamps;