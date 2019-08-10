import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { TodoType } from './types';
import db from '../db';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  type: 'Query',
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve: async (parentValue, args) => {
        try {
          return await db.any('SELECT * from todos');
        } catch(err) {
          return err;
        }
      }
    }
  }
})
