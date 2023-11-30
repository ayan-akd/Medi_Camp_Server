const growingLists = require("../../models/GrowingList");

const getGrowingList = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { email } = req.query;
    const growingList = await growingLists.find({ hostEmail: email });
    res.status(200).send(growingList);
  } catch (error) {
    next(error);
  }
};

module.exports = getGrowingList;
