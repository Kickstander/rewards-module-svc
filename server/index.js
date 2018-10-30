const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/:projectId/rewards', (req, res) => {
  let projectId = req.params.projectId;

  db.Reward.findAll({
    where: {
      projectId: projectId
    },
    order: [
      ['pledgeAmount', 'ASC']
    ]
  })
    .then((rewards) => {
      rewards = rewards.map((reward) => {
        return reward.dataValues;
      });
      res.send(rewards);
    });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
