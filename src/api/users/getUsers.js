const User = require('../../models/Users');

const getUsers = async (req, res, next) => {
    try {
        const { email } = req.query;
        const users = await User.find({ email });
        res.status(200).send(users);
    } catch (error) {
        next(error);
    }
};

module.exports = getUsers;
