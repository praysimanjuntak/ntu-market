const User = require('../models/User');

const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        await User.find({ username, password }).then(user => res.json(user));
    } catch (err) {
        console.log(err);
        return res.status(400).json("Error in login");
    }
}

module.exports = {handleLogin};