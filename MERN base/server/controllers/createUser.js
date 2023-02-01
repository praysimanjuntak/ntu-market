const User = require('../models/User');

const handleCreateUser = async (req, res) => {
    const { username, password, name, email, mobile } = req.body;
    if (!username || !password || !name || !email) return res.status(400).json("Missing information")

    return User.create({username, password, name, email, mobile})
    .then(() => res.json("Successful insert"))
    .catch(console.log)
}

module.exports = {handleCreateUser}