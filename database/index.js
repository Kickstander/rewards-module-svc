const Sequelize = require('sequelize');

const db = new Sequelize({
  user: 'ENTER_YOUR_USERNAME_HERE',
  password: 'ENTER_YOUR_PASSWORD_HERE',
  database: 'rewards',
  dialect: 'mysql',
});

const Reward = db.define('Reward', {
  projectId: Sequelize.INTEGER,
  pledgeAmount: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING(500),
  item1: Sequelize.STRING,
  item2: Sequelize.STRING,
  item3: Sequelize.STRING,
  isLimited: Sequelize.BOOLEAN,
  limitCount: Sequelize.INTEGER,
  estDeliv: Sequelize.STRING,
  shipsTo: Sequelize.STRING,
  backers: Sequelize.INTEGER,
});

const Project = db.define('Project', {
  location: Sequelize.STRING,
});

Reward.sync();
Project.sync();

exports.Reward = Reward;
exports.Project = Project;
