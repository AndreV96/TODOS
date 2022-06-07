const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "How do I write it if it is necessary but the array can be empty?"
    getTasks(userId: ID!): [Task!]
  }

  type Mutation {
    createTask(userId: ID!, description: String!): Task
    updateTask(taskId: ID!, userId: ID!, isCompleted: Boolean!): Task
    deleteTask(taskId: ID!, userId: ID!): Boolean
  }


  type Task {
    id: ID!
    userId: ID!
    description: String
    isCompleted: Boolean
    createdAt: String
    updatedAt: String
  }

`;

module.exports = typeDefs;
