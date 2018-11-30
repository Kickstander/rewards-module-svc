const mongoose = require('mongoose');
const db = require('../index.js');

const { Schema } = mongoose;

const rewardSchema = new Schema({
  projectId: Number,
  location: String,
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

exports.reward1 = db.db1.model('reward', rewardSchema, 'reward');
exports.reward2 = db.db2.model('reward', rewardSchema, 'reward'); 
exports.reward3 = db.db3.model('reward', rewardSchema, 'reward'); 
exports.reward4 = db.db4.model('reward', rewardSchema, 'reward'); 
exports.reward5 = db.db5.model('reward', rewardSchema, 'reward'); 
