const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const router = express.Router();

/**
 * @api {post} /v1/auth/register Register User
 * @apiName RegisterUser
 * @apiGroup Guest
 */
router
  .route("/")
  .post(
    auth("manageUsers"),
    validate(userValidation.createUser),
    userController.createUser
  );

/**
 * @api {post} /v1/users Get Users
 * @apiName getUsers
 * @apiGroup User
 */
router
  .route("/")
  .get(
    auth("getUsers"),
    validate(userValidation.getUsers),
    userController.getUsers
  );

/**
 * @api {post} /v1/auth/register Get Users
 * @apiName getUsers
 * @apiGroup User
 */
router
  .route("/:userId")
  .get(
    auth("getUsers"),
    validate(userValidation.getUser),
    userController.getUser
  );

/**
 * @api {delete} /v1/user/:userId UpdateUser
 * @apiName UpdateUser
 * @apiGroup User
 */
router
  .route("/:userId")
  .patch(
    auth("manageUsers"),
    validate(userValidation.updateUser),
    userController.updateUser
  );

/**
 * @api {delete} /v1/user/:userId Delete User
 * @apiName DeleteUser
 * @apiGroup User
 */
router
  .route("/:userId")
  .delete(
    auth("manageUsers"),
    validate(userValidation.deleteUser),
    userController.deleteUser
  );

module.exports = router;
