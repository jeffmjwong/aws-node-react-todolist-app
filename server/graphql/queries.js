import { GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  type: 'Query',
  fields: {
    user: User
  }
})
