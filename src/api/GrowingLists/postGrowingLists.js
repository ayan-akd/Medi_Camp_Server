const GrowingList = require("../../models/GrowingList");

const postGrowingLists = async (req, res, next) => {
  try {

    const newGrowingList = req.body;
    const existingGrowingList = await GrowingList.findOne({
      campId: newGrowingList.campId,
      email: newGrowingList.email,
    });
    if (existingGrowingList) {
      res.status(409).send({ message: "Already registered for this camp" });
      return;
    } else {
      const result = await GrowingList.create(newGrowingList);
      res.status(200).send({ message: "List added successfully", result });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = postGrowingLists;
