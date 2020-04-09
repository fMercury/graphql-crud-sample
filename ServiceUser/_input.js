const { gql } = require('apollo-server');

const typeDefs = gql`

  input UserCreateInput {
    name: String!
    lastname: String!
    publickey: String!
  }

  input UserUpdateInput {
    id: ID!
    name: String!
    lastname: String!
    publickey: String!
  }

  input UserLoginInput {
    lastname: String!
    publickey: String!
  }

  input UserLastName {
    lastname: String!
  }

  input UserId {
    id: ID!
  }

`;

module.exports = {
  typeDefs,
};
