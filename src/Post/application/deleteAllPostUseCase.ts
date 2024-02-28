import { IPostRepository } from "../domain/repositories/IPostRepository";

export class DeleteAllPostUseCase {
    constructor(private readonly repository: IPostRepository) { }

    async run(): Promise<void> {
        return await this.repository.deleteAll();
    }
}