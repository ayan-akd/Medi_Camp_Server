const Camps = require("../../models/Camps");
const updateCampParticipant = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const { id } = req.params;
    console.log(id);
    const camp = await Camps.findById(id);
    if (!camp) {
      return res.status(404).send({ message: "Camp not found" });
    }
    const result = await Camps.findByIdAndUpdate(
      id,
      { participants: req.body.participants },
      { new: true }
    );
    res.status(200).send({ message: "Participant added successfully", result });
  } catch (error) {
    next(error);
  }
};
module.exports = updateCampParticipant;