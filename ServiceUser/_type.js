const { gql } = require('apollo-server');

const typeDefs = gql`

  type User {
    name: String!
    lastname: String!
    publickey: String!
    id: Int
  }

  type AuthPayLoad {
    token: String!
  }

  type OpResponse {
    message: String!
  }

`;

const resolvers = {
};


module.exports = {
  typeDefs,
  resolvers,
};
