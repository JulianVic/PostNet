import { CreateUserUseCase } from "../application/createUserUseCase";
import { ReadAllUsersUseCase } from "../application/readAllUsersUseCase";

import { createUserController } from "./controller/createUserController";
import { readAllUsersController } from "./controller/readAllUsersController";

import { PrismaUserRepository } from "./repositories/prismaUserRepository";

export const prismaUserRepository = new PrismaUserRepository();

export const createUserUseCase = new CreateUserUseCase(prismaUserRepository);
export const readAllUsersUseCase = new ReadAllUsersUseCase(prismaUserRepository);

export const createUserControllerInstance = new createUserController(createUserUseCase);
export const readAllUsersControllerInstance = new readAllUsersController(readAllUsersUseCase);