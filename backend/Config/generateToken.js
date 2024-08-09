const jwt = require("jsonwebtoken")

const generateToken = (id)=> {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: "33D",}
    );
};

module.exports= generateToken;