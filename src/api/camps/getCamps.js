const Camp = require("../../models/Camps");

const getCamps = async (req, res, next) => {
    try {
        const camps = await Camp.find();
        res.status(200).send(camps);
    } catch (error) {
        next(error);
    }
}

module.exports = getCamps;