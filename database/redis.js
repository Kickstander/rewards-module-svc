const redis = require('redis');
const client = redis.createClient({
  host: 'ec2-13-52-72-76.us-west-1.compute.amazonaws.com'
});

client.on('connect', () => {
  console.log('redis client connected');
});

client.on('error', (err) => {
  console.log('redis client error');
});

module.exports = client;
