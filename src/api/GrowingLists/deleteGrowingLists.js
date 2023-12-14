const growingLists = require("../../models/GrowingList");

const deleteGrowingList = async (req, res, next) => {
  try {
    if (req.user.email !== req.query.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const { id } = req.params;
    const camp = await growingLists.findByIdAndDelete(id);
    if (!camp) {
      return res.status(404).send({ message: "Data not found" });
    }
    res.status(200).send({ message: "Data deleted successfully", camp });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteGrowingList;
