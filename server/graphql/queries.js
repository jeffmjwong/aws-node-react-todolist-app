import {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

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
          return await db.any('SELECT * FROM todos');
        } catch(err) {
          return err;
        }
      }
    },
    todo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: async (parentValue, args) => {
        try {
          return await db.one('SELECT * FROM todos WHERE id=$1', [args.id]);
        } catch(err) {
          return err;
        }
      }
    }
  }
})
