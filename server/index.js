const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const reward = require('../database/models/reward.js');
const redis = require('../database/redis.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/:projectId', express.static('public'));

app.get('/api/:projectId/rewards', (req, res) => {
  const { projectId } = req.params;
  const key = `/api/${projectId}/rewards`;
  redis.exists(key, (err, reply) => {
    if (err) {
      console.log(err);
    } else {
      if (reply) {
        redis.get(key, (err, json) => {
          if (err) {
            res.send(err);
          } else {
            res.send(json);
          }
        });
      } else {
        var target;
        if (projectId < 2000001) {
          target = reward.reward1;
        } else if (projectId < 4000001) {
          target = reward.reward2;
        } else if (projectId < 6000001) {
          target = reward.reward3;
        } else if (projectId < 8000001) {
          target = reward.reward4;
        } else {
          target = reward.reward5;
        }
        target.find({ projectId }).sort({ pledgeAmount: 1 })
          .then((rewards) => {
            redis.set(key, JSON.stringify(rewards));
            res.send(rewards);
          })
          .catch((err) => {
            res.send(err);
          });
      }
    }
  });
});

app.post('/api/:projectId/rewards', (req, res) => {
  db.reward.create(req.body)
    .then(() => {
      res.send('created a new reward');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/api/:projectId/rewards/:rewardId', (req, res) => {
  const { rewardId } = req.params;
  db.reward.findByIdAndUpdate(rewardId, req.body)
    .then(() => {
      res.send('updated');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete('/api/:projectId/rewards/:rewardId', (req, res) => {
  const { rewardId } = req.params;
  db.reward.findByIdAndRemove(rewardId)
    .then(() => {
      res.send('deleted');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(process.env.PORT || port);
console.log(`Server is listening at port ${port}`);
