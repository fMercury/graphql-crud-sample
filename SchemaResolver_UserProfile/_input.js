const { gql } = require('apollo-server');

const typeDefs = gql`
  input UserCreateInput {
    lastname: String!
    name: String!
    publickey: String!
  }
  input UserLoginInput {
    lastname: String!
    publickey: String!
  }
`;

module.exports = {
  typeDefs,
};
