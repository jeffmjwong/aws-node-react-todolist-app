import { GraphQLObjectType, GraphQLString } from 'graphql';
import { TodoType } from './queries';
import db from '../db';

export default new GraphQLObjectType({
  name: 'RootQuery',
  type: 'Query',
  fields: {
    user: {
      type: GraphQLString,
      args: { name: { type: GraphQLString } },
      resolve(parentValue, args) {
        if (args.name) {
          return `Hello I am a user, my name is ${args.name}!`;
        } else {
          return 'Hello I am a user!';
        }
      }
    }
  }
})
