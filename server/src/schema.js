const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    //How do I write it if it is necessary but the array can be empty?
    getAllTODOS: [TODO]!
  }

  type Mutation {
  }

  type TODO {
    "TODO ID"
    id: ID!
    "TODO description"
    description: String!
    "Whether the TODO has been done or not."
    done: Boolean!
  }

`;

module.exports = typeDefs;
