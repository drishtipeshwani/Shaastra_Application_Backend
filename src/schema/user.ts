import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { Post } from '../database/entity/Post';


@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Post)
  posts?: Post[];
}

@InputType()
export class CreateUser implements Partial<User> {
  @Field()
  @Length(2, 100)
  username: string;

  @Field()
  @Length(10, 255)
  email: string;

  @Field()
  @Length(8, 20)
  password: string;

  @Field(() => [Post])
  posts?: Post[];
}
