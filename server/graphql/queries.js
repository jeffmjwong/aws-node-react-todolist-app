import { GraphQLObjectType } from 'graphql';

import { TodoType } from './queries';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  type: 'Query',
  fields: {
    todos: [TodoType]
  }
})
