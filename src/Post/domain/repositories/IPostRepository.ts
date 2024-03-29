import { Post } from "../entities/Post";

export interface IPostRepository {
    create(post: Post): Promise<Post>
    readAll(): Promise<Post[]>
    readById(id: number): Promise<Post>
    deleteById(id: number): Promise<void>
    deleteAll(): Promise<void>
}