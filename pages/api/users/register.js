const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import getConfig from "next/config";

import { apiHandler, usersRepo } from "helpers/api";

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
  post: register,
});

function register(req, res) {
  // split out password from user details
  const { password, ...user } = req.body;

  console.log(req.body);
  // validate
  if (usersRepo.find((x) => x.username === user.username))
    throw `User with the username "${user.username}" already exists`;

  // hash password
  user.hash = bcrypt.hashSync(password, 10);

  usersRepo.create(user);

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, {
    expiresIn: "7d",
  });

  // return basic user details and token
  return res.status(200).json({
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    token,
  });
}
