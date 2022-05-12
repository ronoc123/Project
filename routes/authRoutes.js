import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message:
    "Too many requests from this IP addess, please try again after 15 minutes",
});

import authenticateUser from "../middleware/auth.js";
import { updateUser, login, register } from "../controllers/authController.js";

router.route("/register").post(apiLimiter, register);

router.route("/login").post(apiLimiter, login);

router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
