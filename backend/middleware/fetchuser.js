const JWT_SECRET = "This is Seriously a Secret Key";
const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    return res.status(401).send({ error: "Please Verify Your Account!" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send("Internal Server Error");
  }
};

module.exports = fetchuser;
