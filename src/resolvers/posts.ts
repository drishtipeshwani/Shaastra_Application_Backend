import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { Service } from 'typedi';
import { Post, CreatePostInput, UpdatePostInput } from '../schema/post';
import { PostService } from '../database/services/Postservice';
@Resolver(() => Post)
export class PostResolver {
    constructor(private readonly postService: PostService) { }

    @Query(() => Post, { nullable: true })
    async getPost(@Arg('id') id: number): Promise<Post | undefined> {
        return await this.postService.getOnePost(id);
    }

    @Mutation(() => Post)
    async addPost(
        @Arg('PostInput') createPostInput: CreatePostInput,
    ): Promise<Post> {
        return await this.postService.createPost(createPostInput);
    }

    @Mutation(() => Post)
    async updatePost(
        @Arg('id') id: number,
        @Arg('PostInput') updatePostInput: UpdatePostInput,
    ): Promise<Post> {
        return await this.postService.updatePost(id, updatePostInput);
    }

    @Mutation((returns) => Boolean)
    async deletePost(@Arg('id') id: number): Promise<boolean> {
        return await this.postService.deletePost(id);
    }
}