const growingLists = require("../../models/GrowingList");

const getGrowingListById = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
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
