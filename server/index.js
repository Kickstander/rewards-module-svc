require('newrelic');
const express = require('express');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const port = 3003;
const host = '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use('/:projectId', express.static('public'));

app.get('/api/:projectId/rewards', (req, res) => {
  const { projectId } = req.params;
  db.reward.find({ projectId }).sort({ pledgeAmount: 1 })
    .then((rewards) => {
      res.send(rewards);
    })
    .catch((err) => {
      res.send(err);
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

app.get('/api/:projectId/currency', (req, res) => {
  const { projectId } = req.params;
  db.project.find({ projectId })
    .then((project) => {
      res.send(project[0]);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, host);
console.log(`Server is listening at port ${port}`);
