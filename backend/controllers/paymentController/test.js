const jwt=require("jsonwebtoken");


const test = async(req, res) => {
    console.log("hello");
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await res.status(200).json({decoded});
}
module.exports = test;