const growingLists = require("../../models/GrowingList");

const getGrowingListById = async (req, res, next) => {
  try {

    const { id } = req.params;
    const growingList = await growingLists.find({
      campId: id,
    });
    res.status(200).send(growingList);
  } catch (error) {
    next(error);
  }
};

module.exports = getGrowingListById;
