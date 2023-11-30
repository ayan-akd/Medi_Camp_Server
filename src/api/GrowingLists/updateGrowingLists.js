const growingLists = require("../../models/GrowingList");

const updateGrowingList = async (req, res, next) => {
  try {

    const { id } = req.params;
    const camp = await growingLists.findById(id);
    if (!camp) {
      return res.status(404).send({ message: "Data not found" });
    }
    const result = await growingLists.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({ message: "Data updated successfully", result });
  } catch (err) {
    next(err);
  }
};

module.exports = updateGrowingList;
