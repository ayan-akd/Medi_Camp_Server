const User = require('../../models/Users');

const getUserByEmail = async (req, res, next) => {
    try {
        const { email } = req.query;
        const users = await User.findOne({ email });
        res.status(200).send(users);
    } catch (error) {
        next(error);
    }
};

module.exports = getUserByEmail;
