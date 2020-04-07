const { gql } = require('apollo-server');
const typeDefs = gql`
  type User {
    name: String!
    lastname: String!
    publickey: String!
    id: Int
  }

type Mutation {
  signupUser(data: UserCreateInput!) : AuthPayLoad!
  loginUser(data: UserLoginInput!): AuthPayLoad!
}

input UserCreateInput {
  lastname: String!
  name: String!
  publickey: String!
}

input UserLoginInput {
  lastname: String!
  publickey: String!
}

type AuthPayLoad {
  token: String!
}
  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;