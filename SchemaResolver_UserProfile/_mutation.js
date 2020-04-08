const { gql } = require('apollo-server');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const typeDefs = gql`
  type Mutation {
    signupUser(data: UserCreateInput!) : AuthPayLoad!
    loginUser(data: UserLoginInput!): AuthPayLoad!
  }
`;

resolvers = {
  Mutation: {
    signupUser: async (root, args, context, info) => {
      const { data: { name, lastname, publickey } } = args;
      const newUser = await context.UserProfile.create(
        name,
        lastname,
        bcrypt.hashSync(publickey, 3)
      );
      return { token: jwt.sign(newUser.dataValues, "supersecret") };
    },

    loginUser: async (root, args, context, info) => {
      const { data: { lastname, publickey } } = args;
      const [theUser] = await context.UserProfile.findAllByLastName(
        lastname
      )

      console.log(theUser)
      if (!theUser) throw new Error('Unable to find user');
      const isMatch = bcrypt.compareSync(publickey, theUser.dataValues.publickey);
      if (!isMatch) throw new Error('Unable to Login');
      return { token: jwt.sign(theUser.dataValues, "supersecret") };
    }
  },

};

module.exports = {
  typeDefs,
  resolvers,
};
