const mongoose = require('mongoose');

mongoose.connect('mongodb://ec2-54-193-113-43.us-west-1.compute.amazonaws.com/rewards');

var db = mongoose.connection;

db.on('error', () => {
  console.log('connection error');
});

db.once('open', () => {
  console.log('mongodb connected');
});

const { Schema } = mongoose;

const projectSchema = new Schema({
  projectId: Number,
  location: String,
});

const rewardSchema = new Schema({
  projectId: Number,
  pledgeAmount: Number,
  name: String,
  description: String,
  item1: String,
  item2: String,
  item3: String,
  isLimised: Boolean,
  limitCount: Number,
  estDeliv: String,
  shipsTo: String,
  backers: Number,
});

exports.project = mongoose.model('project', projectSchema, 'project');
exports.reward = mongoose.model('reward', rewardSchema, 'reward');
