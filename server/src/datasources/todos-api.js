const { RESTDataSource } = require('apollo-datasource-rest');
const {
  User,
  Task
} = require('../../models');

class TODOSAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    // this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTasks(userId) {
    return Task.findAll({
      where: {
        userId
      }
    })
  }
  createTask(userId, description) {
    const task = Task.create({
      userId,
      description,
    });
    return task;
  }
  updateTask(userId, taskId, isCompleted) {
    const updatedAt = new Date();
    const updatedTask = Task.update({
      isCompleted,
      updatedAt
    },{
      where: {
        id: taskId,
        userId
      },
      returning: true
    })
    return updatedTask;
  }
  deleteTask(userId, taskId) {
    const deletedTask = Task.destroy({
      where: {
        id: taskId,
        userId
      }
    });
    return deletedTask > 0;
  }
  // getTracksForHome() {
  //   return this.get('tracks');
  // }

  // getAuthor(authorId) {
  //   return this.get(`author/${authorId}`);
  // }

  // getTrack(trackId) {
  //   return this.get(`track/${trackId}`);
  // }

  // getTrackModules(trackId) {
  //   return this.get(`track/${trackId}/modules`);
  // }

  // getModule(moduleId) {
  //   return this.get(`module/${moduleId}`);
  // }

  // incrementTrackViews(trackId) {
  //   return this.patch(`track/${trackId}/numberOfViews`);
  // }
}

module.exports = TODOSAPI;
