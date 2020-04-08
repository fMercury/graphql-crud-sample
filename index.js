const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers');

const UserProfile = require('./controller').UserProfile;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: req => ({
        UserProfile,
        req
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});