const GrowingList = require("../../models/GrowingList");

const postGrowingLists = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const list = req.body;
    const result = await GrowingList.create(list);
    res.status(200).send({ message: "List added successfully", result });
  } catch (error) {
    next(error);
  }
};

module.exports = postGrowingLists;
