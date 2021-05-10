import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { User } from '../database/entity/User'

@ObjectType()
export class Post {
    @Field()
    id: number;

    @Field()
    title: string;

    @Field()
    userId: number;

    @Field(() => User)
    user?: User;


}

@InputType()
export class CreatePostInput implements Partial<Post> {
    @Field()
    @Length(2, 255)
    title: string;

    @Field()
    userId: number;

    @Field(() => User)
    user?: User;
}

@InputType()
export class UpdatePostInput implements Partial<Post> {
    @Field()
    @Length(2, 255)
    title: string;

    @Field()
    userId: number;

    @Field(() => User)
    user?: User;
}