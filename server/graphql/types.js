import {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql';

export const TodoType = new GraphQLObjectType({
  name: 'Todo',
  type: 'Query',
  description: 'A TodoType describing the shape of a Todo'
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
    number: { type: GraphQLInt },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});
