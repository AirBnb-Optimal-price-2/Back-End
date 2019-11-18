const jwt = require("jsonwebtoken");

module.exports = user => {
    console.log("inside generateToken")
    console.log(process.env.JWT_SECRET)
    const payload = {
        id: user.id,
        username: user.username
    }
    
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: '1d' }

    return jwt.sign(payload, secret, options);
};