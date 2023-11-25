const User = require('../../models/Users');

const addUsers = async (req, res, next) => {
    try {
        const user = req.body;
        const result = await User.create(user);
        res.status(200).send({ message: "User added successfully", result });
    } catch (error) {
        next(error);
    }
}
module.exports = addUsers;