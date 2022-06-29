const userService = require("../services/user.services");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const registerController = async (req, res) => {
   try {
      await userService.addUser(req.body);
      res.json({ success: true, message: "Account successfully created" });
   } catch (error) {}
};

const loginController = async (req, res) => {
   const { username, password } = req.body;
   try {
      const user = await userService.checkUser(username, password);

      const accessToken = jwt.sign({ ...user }, secretKey, { expiresIn: "1h" });
      // const refreshToken = jwt.sign({ ...user }, secretKey, {
      //    expiresIn: "7d",
      // });
      // res.cookie("refreshToken", refreshToken, {
      //    maxAge: 86_400_000,
      //    httpOnly: true,
      // });
      res.json({ token: accessToken, id: user.userId });
   } catch (error) {
      console.log(error);
      res.status(403).json({ error });
   }
};

const userinfoController = async (req, res) => {
   let id = req.params.id;
   try {
      let [data] = await userService.getUserinfo(id);
      res.json({ success: true, payload: data });
   } catch (error) {}
};

const refreshTokenController = (req, res) => {};

module.exports = {
   registerController,
   loginController,
   refreshTokenController,
   userinfoController,
};
