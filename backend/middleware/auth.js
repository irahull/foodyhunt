const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res.status(400).json({ message: "Token not found", success: false });
  }
  try {
    // const decodedToken = jwt.verify(token, process.env.ACESS_TOKEN_SECRET);
    // req.body.userId = decodedToken.userId;
    // console.log(decodedToken);
    // next();

    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, data) => {
      if (err) return res.status(401).json({ msg: "Invalid token" });
      req.userId = data.userId;

      next();
    });
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized" });
    console.log(error);
  }
};

module.exports = authMiddleware;
