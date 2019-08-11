import { GRAPHQL_URL } from './constants';
import getTodosQuery from './queries/getTodosQuery.gql';

export const getTodosGraphQL = async () => {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: getTodosQuery })
  });

  if (response) {
    const result = await response.json();
    return result.data;
  } else {
    const result = await response.json();
    throw new Error(result.data);
  }
};
