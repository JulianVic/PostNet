import { CreateUserUseCase } from "../application/createUserUseCase";
import { ReadAllUsersUseCase } from "../application/readAllUsersUseCase";
import { ReadUserByIdUseCase } from "../application/readUserByIdUseCase";

import { createUserController } from "./controller/createUserController";
import { readAllUsersController } from "./controller/readAllUsersController";
import { readByIdUserController } from "./controller/readUserByIdController";

import { PrismaUserRepository } from "./repositories/prismaUserRepository";

export const prismaUserRepository = new PrismaUserRepository();

export const createUserUseCase = new CreateUserUseCase(prismaUserRepository);
export const readAllUsersUseCase = new ReadAllUsersUseCase(prismaUserRepository);
export const readUserByIdUseCase = new ReadUserByIdUseCase(prismaUserRepository);

export const createUserControllerInstance = new createUserController(createUserUseCase);
export const readAllUsersControllerInstance = new readAllUsersController(readAllUsersUseCase);
export const readByIdUserControllerInstance = new readByIdUserController(readUserByIdUseCase);