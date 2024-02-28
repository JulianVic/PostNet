import { NotificationNewProductUseCase } from "../application/NotificationNewProductUseCase";
import { CreatePostUseCase } from "../application/createPostUseCase";
import { ReadAllPostsUseCase } from "../application/readAllPostsUseCase";
import { ReadPostByIdUseCase } from "../application/readPostByIdUseCase";
import { DeleteByIdPostUseCase } from "../application/deleteByIdPostUseCase";
import { DeleteAllPostUseCase } from "../application/deleteAllPostUseCase";

import { createPostController } from "./controller/createPostController";
import { readAllPostsController } from "./controller/readAllPostsController";
import { readPostByIdController } from "./controller/readPostByIdController";
import { deleteByIdPostController } from "./controller/deleteByIdPostController";
import { deleteAllPostController } from "./controller/deleteAllPostController";

import { PrismaPostRepository } from "./repositories/prismaPostRepository";
import { RabbitMQService } from "./services/RabbitMQService";

export const prismaPostRepository = new PrismaPostRepository();
export const servicesNotification = new RabbitMQService

export const serviceNotificationUseCase = new NotificationNewProductUseCase(servicesNotification)
export const createPostUseCase = new CreatePostUseCase(prismaPostRepository, serviceNotificationUseCase);
export const readAllPostsUseCase = new ReadAllPostsUseCase(prismaPostRepository);
export const readPostByIdUseCase = new ReadPostByIdUseCase(prismaPostRepository);
export const deleteByIdPostUseCase = new DeleteByIdPostUseCase(prismaPostRepository);
export const deleteAllPostUseCase = new DeleteAllPostUseCase(prismaPostRepository);

export const createPostControllerInstance = new createPostController(createPostUseCase);
export const readAllPostsControllerInstance = new readAllPostsController(readAllPostsUseCase);
export const readPostByIdControllerInstance = new readPostByIdController(readPostByIdUseCase);
export const deleteByIdPostControllerInstance = new deleteByIdPostController(deleteByIdPostUseCase);
export const deleteAllPostControllerInstance = new deleteAllPostController(deleteAllPostUseCase);
