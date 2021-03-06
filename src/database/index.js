import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import User from '../app/models/User';
import Post from '../app/models/Post';
import Comment from '../app/models/Comment';

const models = [User, Post, Comment];

class Database {
  constructor() {
    this.init();
  };

  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  };
};

export default new Database();