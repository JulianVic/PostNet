import express from "express";

import { createPostControllerInstance } from "../dependencies"; 
import { readAllPostsControllerInstance } from "../dependencies";
import { readPostByIdControllerInstance } from "../dependencies";
import { deleteByIdPostControllerInstance } from "../dependencies";
import { deleteAllPostControllerInstance } from "../dependencies";

export const postRouter = express.Router();

postRouter.post("/", createPostControllerInstance.run.bind(createPostControllerInstance));
postRouter.get("/", readAllPostsControllerInstance.run.bind(readAllPostsControllerInstance));
postRouter.get("/:id", readPostByIdControllerInstance.run.bind(readPostByIdControllerInstance));
postRouter.delete("/:id", deleteByIdPostControllerInstance.run.bind(deleteByIdPostControllerInstance));
postRouter.delete("/", deleteAllPostControllerInstance.run.bind(deleteAllPostControllerInstance));