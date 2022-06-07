const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    getTasks: async (_, {userId}, { dataSources }) => {
      return await dataSources.TODOSAPI.getTasks(userId);
    },
  },

  Mutation: {
    createTask: async (_, {userId, description}, { dataSources }) => {
      return await dataSources.TODOSAPI.createTask(userId, description);
    },
    //Este no funciona todavia
    updateTask: async (_, {userId, taskId, isCompleted}, { dataSources }) => {
      return await dataSources.TODOSAPI.updateTask(userId, taskId, isCompleted);
    },
    deleteTask: async (_, {userId, taskId}, { dataSources }) => {
      return await dataSources.TODOSAPI.deleteTask(userId, taskId);
    },
  }
  // Mutation: {
  //   // increments a track's numberOfViews property
  //   incrementTrackViews: async (_, { id }, { dataSources }) => {
  //     try {
  //       const track = await dataSources.trackAPI.incrementTrackViews(id);
  //       return {
  //         code: 200,
  //         success: true,
  //         message: `Successfully incremented number of views for track ${id}`,
  //         track,
  //       };
  //     } catch (err) {
  //       return {
  //         code: err.extensions.response.status,
  //         success: false,
  //         message: err.extensions.response.body,
  //         track: null,
  //       };
  //     }
  //   },
  // },
  // Track: {
  //   author: ({ authorId }, _, { dataSources }) => {
  //     return dataSources.trackAPI.getAuthor(authorId);
  //   },

  //   modules: ({ id }, _, { dataSources }) => {
  //     return dataSources.trackAPI.getTrackModules(id);
  //   },
  // },
};

module.exports = resolvers;
