import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import express from 'express';
import { UserResolver } from './resolvers/users';
import { PostResolver } from './resolvers/posts'
import initializeDB from './database/db';

const app = express();
const dir = 'src';

async function main() {
  await initializeDB();
  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver],
    container: Container,
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });

  const port = process.env.PORT || 5000;

  app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}/graphql`),
  );
}

main();
