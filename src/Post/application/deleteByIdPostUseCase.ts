import { Post } from "../domain/entities/Post";
import { IPostRepository } from "../domain/repositories/IPostRepository";

export class DeleteByIdPostUseCase {
    constructor(private readonly repository: IPostRepository) { }

    async run(id: number): Promise<void> {
        return await this.repository.deleteById(id);
    }
}