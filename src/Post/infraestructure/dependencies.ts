import { CreatePostUseCase } from "../application/createPostUseCase";
import { ReadAllPostsUseCase } from "../application/readAllPostsUseCase";
import { ReadPostByIdUseCase } from "../application/readPostByIdUseCase";

import { createPostController } from "./controller/createPostController";
import { readAllPostsController } from "./controller/readAllPostsController";
import { readPostByIdController } from "./controller/readPostByIdController";

import { PrismaPostRepository } from "./repositories/prismaPostRepository";

export const prismaPostRepository = new PrismaPostRepository();

export const createPostUseCase = new CreatePostUseCase(prismaPostRepository);
export const readAllPostsUseCase = new ReadAllPostsUseCase(prismaPostRepository);
export const readPostByIdUseCase = new ReadPostByIdUseCase(prismaPostRepository);

export const createPostControllerInstance = new createPostController(createPostUseCase);
export const readAllPostsControllerInstance = new readAllPostsController(readAllPostsUseCase);
export const readPostByIdControllerInstance = new readPostByIdController(readPostByIdUseCase);