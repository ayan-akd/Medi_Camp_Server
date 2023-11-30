const growingLists = require("../../models/GrowingList");

const getGrowingList = async (req, res, next) => {
  try {

    const growingList = await growingLists.find();
    res.status(200).send(growingList);
  } catch (error) {
    next(error);
  }
};

module.exports = getGrowingList;
