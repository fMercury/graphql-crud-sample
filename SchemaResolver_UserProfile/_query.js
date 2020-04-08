const { gql } = require('apollo-server');
const { decodedToken } = require('../util/decodedToken');


const typeDefs = gql`
  type Query {
    users: [User]
  }
`;

resolvers = {
  Query: {
    users: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      return context.UserProfile.findAll();
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
