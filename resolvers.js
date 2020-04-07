const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { decodedToken } = require('./decodedToken');



const resolvers = {
  Query: {
    users: async (root, args, context, info) => { 
      const decoded = decodedToken(context.req);
      return context.UserProfile.findAll();
    },
  },
  Mutation: {
    signupUser: async (root, args, context, info) => {
        const { data: { lastname, name, publickey } } = args;
        const newUser = await context.UserProfile.create(
          lastname,
          name,
          bcrypt.hashSync(publickey, 3)
        );
        return {token : jwt.sign(newUser.dataValues, "supersecret")};
    },
    loginUser: async (root, args, context , info)  => {
      const { data: { lastname, publickey } } = args;
      const [theUser] = await context.UserProfile.findAllByLastName(
          lastname
      )

      if (!theUser) throw new Error('Unable to Login');
      const isMatch = bcrypt.compareSync(publickey, theUser.dataValues.publickey);
      if (!isMatch) throw new Error('Unable to Login');
      return { token: jwt.sign(theUser.dataValues, "supersecret")};
    }
  }
};

module.exports = resolvers;