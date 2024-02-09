import { Post } from "../domain/entities/Post";
import { IPostRepository } from "../domain/repositories/IPostRepository";

export class CreatePostUseCase {
    constructor(private readonly repository: IPostRepository) {}
    
    async run(title: string, content: string, authorId: number): Promise<Post> {
        const post = new Post(title, content, authorId);
        return await this.repository.create(post);
    }
}