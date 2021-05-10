import { Service } from 'typedi';
import { Post } from '../entity/Post';
import { CreatePostInput, UpdatePostInput } from '../../schema/post';

@Service()
export class PostService {

    getOnePost = async (id: number): Promise<Post | undefined> => {
        const post = await Post.findOne({ where: { id } });

        if (!post) {
            throw new Error(`The movie with id: ${id} does not exist!`);
        }
        return post;
    };

    createPost = async (createPostInput: CreatePostInput): Promise<Post> => {
        return await Post.create(createPostInput).save();
    };

    updatePost = async (
        id: number,
        updatePostInput: UpdatePostInput,
    ): Promise<Post> => {
        const postFound = await Post.findOne({ where: { id } });

        if (!postFound) {
            throw new Error(`The movie with id: ${id} does not exist!`);
        }

        Object.assign(postFound, updatePostInput);
        const updatedPost = await postFound.save();

        return updatedPost;
    };

    deletePost = async (id: number): Promise<boolean> => {
        const postFound = await Post.findOne({ where: { id } });

        if (!postFound) {
            throw new Error(`The post with id: ${id} does not exist!`);
        }

        await postFound.remove();

        return true;
    };
}