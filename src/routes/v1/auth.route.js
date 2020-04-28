const express = require("express");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");
const authController = require("../../controllers/auth.controller");

const router = express.Router();

/**
 * @api {post} /v1/auth/register Register User
 * @apiName RegisterUser
 * @apiGroup Guest
 */
router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

/**
 * @api {post} /v1/auth/login Login User
 * @apiName LoginUser
 * @apiGroup Guest
 */
router.post("/login", validate(authValidation.login), authController.login);

/**
 * @api {post} /v1/auth/refresh-tokens Refresh User tokens
 * @apiName RegisterUser
 * @apiGroup User
 */
router.post(
  "/refresh-tokens",
  validate(authValidation.refreshTokens),
  authController.refreshTokens
);

/**
 * @api {post} /v1/auth/forgot-password Forgot Password
 * @apiName ForgotPassword
 * @apiGroup Guest
 */
router.post(
  "/forgot-password",
  validate(authValidation.forgotPassword),
  authController.forgotPassword
);

/**
 * @api {post} /v1/auth/reset-password Reset password
 * @apiName ResetPassword
 * @apiGroup Guest
 */
router.post(
  "/reset-password",
  validate(authValidation.resetPassword),
  authController.resetPassword
);

module.exports = router;
