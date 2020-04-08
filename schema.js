const { gql } = require('apollo-server');
const typeDefs = gql`
  
  type User {
    name: String!
    lastname: String!
    publickey: String!
    id: ID!
  }

  type Mutation {
    signupUser(data: UserCreateInput!) : AuthPayLoad!
    loginUser(data: UserLoginInput!): AuthPayLoad!

    updateUser(data: UserUpdateInput!): OpResponse!
    deleteUser(data: UserId!): OpResponse!
    deleteAll: OpResponse!
  }

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

  type AuthPayLoad {
    token: String!
  }

  type OpResponse {
    message: String!
  }

  type Query {
    users: [User]
    usersByLastName(data: UserLastName): [User]
    usersById(data: UserId!): User!
  }
`;

module.exports = typeDefs;