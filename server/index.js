const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/:projectId/rewards', (req, res) => {
  const { projectId } = req.params;

  db.Reward.findAll({
    where: {
      projectId,
    },
    order: [
      ['pledgeAmount', 'ASC'],
    ],
  })
    .then((rewards) => {
      const results = rewards.map(reward => (reward.dataValues));
      res.send(results);
    });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
