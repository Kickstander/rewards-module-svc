const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rewards');

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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

exports.project = mongoose.model('project', projectSchema, 'project');
exports.reward = mongoose.model('reward', rewardSchema, 'reward');
