const Camp = require("../../models/Camps");

const getCampById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const camp = await Camp.findById(id);
        res.status(200).send(camp);
    } catch (error) {
        next(error);
    }
}
module.exports = getCampById;