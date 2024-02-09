import express from "express";

import { createUserControllerInstance } from "../dependencies";
import { readAllUsersControllerInstance } from "../dependencies";

export const userRouter = express.Router();

userRouter.post("/", createUserControllerInstance.run.bind(createUserControllerInstance));
userRouter.get("/", readAllUsersControllerInstance.run.bind(readAllUsersControllerInstance));