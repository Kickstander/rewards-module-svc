const mongoose = require('mongoose');

const db1 = mongoose.createConnection('mongodb://ec2-13-52-53-255.us-west-1.compute.amazonaws.com/rewards');

const db2 = mongoose.createConnection('mongodb://ec2-54-219-118-177.us-west-1.compute.amazonaws.com/rewards');

const db3 = mongoose.createConnection('mongodb://ec2-52-9-122-101.us-west-1.compute.amazonaws.com/rewards');

const db4 = mongoose.createConnection('mongodb://ec2-52-53-92-100.us-west-1.compute.amazonaws.com/rewards');

const db5 = mongoose.createConnection('mongodb://ec2-13-57-25-229.us-west-1.compute.amazonaws.com/rewards');


db1.on('error', () => {
  console.log('connection error on: db1');
});

db1.once('open', () => {
  console.log('db1 connected');
});

db2.on('error', () => {
  console.log('connection error on: db2');
});

db2.once('open', () => {
  console.log('db2 connected');
});

db3.on('error', () => {
  console.log('connection error on: db3');
});

db3.once('open', () => {
  console.log('db3 connected');
});

db4.on('error', () => {
  console.log('connection error on: db4');
});

db4.once('open', () => {
  console.log('db4 connected');
});

db5.on('error', () => {
  console.log('connection error on: db5');
});

db5.once('open', () => {
  console.log('db5 connected');
});

exports.db1 = db1;
exports.db2 = db2;
exports.db3 = db3;
exports.db4 = db4;
exports.db5 = db5;
