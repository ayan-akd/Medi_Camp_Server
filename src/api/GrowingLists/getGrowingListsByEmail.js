const growingLists = require("../../models/GrowingList");

const getGrowingList = async (req, res, next) => {
  try {

    const { email } = req.query;
    const growingList = await growingLists.find({ hostEmail: email });
    res.status(200).send(growingList);
  } catch (error) {
    next(error);
  }
};

module.exports = getGrowingList;
