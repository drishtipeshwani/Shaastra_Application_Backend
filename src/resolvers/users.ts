import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Service } from 'typedi';
import { User, CreateUser } from '../schema/user';
import { UserService } from '../database/services/Userservice';

@Service()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(() => User, { nullable: true })
  async getUser(@Arg('id') id: number): Promise<User | undefined> {
    return await this.userService.getOneUser(id);
  }

  @Mutation((returns) => User)
  async addUser(@Arg('UserInput') createUser: CreateUser): Promise<User> {
    return await this.userService.createUser(createUser);
  }
}
