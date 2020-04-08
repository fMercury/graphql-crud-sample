const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require("@apollo/federation");

const inputs = require('./_input');
const mutations = require('./_mutation');
const queries = require('./_query');
const types = require('./_type');

const UserProfile = require('../controller').UserProfile;

const server = new ApolloServer({

  schema: buildFederatedSchema([inputs, queries, mutations, types]),
  context: req => ({
    UserProfile,
    req
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});