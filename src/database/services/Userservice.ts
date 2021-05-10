import { Service } from 'typedi';
import { User } from '../entity/User';
import { CreateUser } from '../../schema/user';

@Service()
export class UserService {

  getOneUser = async (id: number): Promise<User | undefined> => {
    const post = await User.findOne({ where: { id } });

    if (!post) {
      throw new Error(`The movie with id: ${id} does not exist!`);
    }
    return post;
  };

  createUser = async (createUser: CreateUser): Promise<User> => {
    return await User.create(createUser).save();
  };
}
