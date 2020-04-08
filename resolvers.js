const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { decodedToken } = require('./util/decodedToken');



const resolvers = {
  Query: {
    users: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      return context.UserProfile.findAll();
    },

    usersByLastName: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      const { data: { lastname } } = args;
      const theUser = await context.UserProfile.findAllByLastName( lastname )
      if (!theUser) throw new Error('Unable to find user');
      return theUser;
    },

    usersById: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      const { data: { id } } = args;
      const theUser = await context.UserProfile.findOne( id )
      if (!theUser) throw new Error('Unable to find user');
      return theUser;
    },

  },
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
      const [theUser] = await context.UserProfile.findAllByLastName( lastname )
      if (!theUser) throw new Error('Unable to find user');
      const isMatch = bcrypt.compareSync(publickey, theUser.dataValues.publickey);
      if (!isMatch) throw new Error('Unable to Login');
      return { token: jwt.sign(theUser.dataValues, "supersecret") };
    },

    updateUser: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      const { data: { id, name, lastname, publickey } } = args;
      body = {  'name': name, 
                'lastname': lastname,
                'publickey': publickey 
              }
      let aux =  await context.UserProfile.update(id, body)
      return aux
    },

    deleteUser: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      const { data: { id } } = args;
      return context.UserProfile.delete( id );
    },

    deleteAll: async (root, args, context, info) => {
      const decoded = decodedToken(context.req);
      return context.UserProfile.deleteAll();
    },

  }
};

module.exports = resolvers;