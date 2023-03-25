const User = require('../models/User');

const handleCreateUser = async (req, res) => {
    const { username, password, name, email, mobile } = req.body;
    if (!username || !password || !email) return res.status(400).json("Missing information")

    try {
        await User.create({username, password, name, email, mobile})
        return res.json("successful");
    } catch(e) {
        console.log(e);
        if (e.code === 11000) return res.status(400).json("duplicate")
        else return res.status(400).json("Error in insert")
    }
}

module.exports = {handleCreateUser}