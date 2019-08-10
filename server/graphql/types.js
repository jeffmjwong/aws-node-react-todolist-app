import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const TodoType = new GraphQLObjectType({
  name: 'Todo',
  type: 'Query',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    completed: { type: GraphQLString },
    number: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});
