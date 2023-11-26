const Camps = require("../../models/Camps");
const updateCampParticipant = async (req, res, next) => {
    try {
        const { id } = req.params;
        const camp = await Camps.findById(id);
        const { participants } = camp;
        const result = await Camps.findByIdAndUpdate(id, { participants }, { new: true });
        res.status(200).send({ message: "Participant added successfully", result });
    } catch (error) {
        next(error);
    }
}
module.exports = updateCampParticipant;