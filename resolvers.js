const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { decodedToken } = require('./decodedToken');



const resolvers = {
  Query: {
    users: async (root, args, { context, req }, info) => { 
        const decoded = decodedToken(req);
        return context.users();
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
      console.log(newUser.dataValues)

        return {token : jwt.sign(newUser.dataValues, "supersecret")};
    },
    loginUser: async (root, args, { context }, info)  => {
      const { data: { lastname, publickey } } = args;
      const [ theUser ] = await context.users({
        where: {
          lastname
        }
      })
      if (!theUser) throw new Error('Unable to Login');
      const isMatch = bcrypt.compareSync(publickey, theUser.publickey);
      if (!isMatch) throw new Error('Unable to Login');
      return {token : jwt.sign(theUser, "supersecret")};
    }
  }
};

module.exports = resolvers;