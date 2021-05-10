import { ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User';

@Entity('posts')
@ObjectType()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'integer', name: 'user_id' })
  userId!: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user?: User;
}
