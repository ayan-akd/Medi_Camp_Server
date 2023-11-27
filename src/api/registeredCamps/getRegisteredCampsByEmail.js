const registeredCamps = require("../../models/RegisteredCamps");

const getRegisteredCampsByEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    const registeredCampsByEmail = await registeredCamps.find({ hostEmail: email });
    res.status(200).send(registeredCampsByEmail);
  } catch (err) {
    next(err);
  }
};

module.exports = getRegisteredCampsByEmail;