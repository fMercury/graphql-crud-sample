const { gql } = require('apollo-server');
const { decodedToken } = require('../util/decodedToken');


const typeDefs = gql`

  type Query {
    users: [User]
    usersByLastName(data: UserLastName): [User]
    usersById(data: UserId!): User!
  }

`;

resolvers = {

  Query: {
    users: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      return context.UserProfile.findAll();
    },

    usersByLastName: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      const { data: { lastname } } = args;
      const theUser = await context.UserProfile.findAllByLastName(lastname)
      if (!theUser) throw new Error('Unable to find user');
      return theUser;
    },

    usersById: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      const { data: { id } } = args;
      const theUser = await context.UserProfile.findOne(id)
      if (!theUser) throw new Error('Unable to find user');
      return theUser;
    },
  },

};

module.exports = {
  typeDefs,
  resolvers,
};
