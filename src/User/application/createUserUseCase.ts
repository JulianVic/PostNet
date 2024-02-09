import { User } from '../domain/entities/User';
import { IUserRepository } from '../domain/repositories/IUserRepository';

export class CreateUserUseCase {
    constructor(private readonly repository: IUserRepository) { }
    
    async run(name: string, password: string): Promise<User> {
        const user = new User(name, password);
        return await this.repository.create(user);
    }
}