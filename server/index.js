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

app.get('/api/:projectId/currency', (req, res) => {
  const { projectId } = req.params;

  db.Project.findAll({
    where: {
      id: projectId,
    },
  })
    .then((project) => {
      const currencyMap = {
        CA: 'C$',
        UK: '£',
        US: 'US$',
        AU: 'A$',
        NZ: 'NZ$',
        NL: '€',
        DK: 'kr.',
        IE: '€',
        NO: 'kr',
        SE: 'kr',
        DE: '€',
        FR: '€',
        ES: '€',
        IT: '€',
        AT: '€',
        BE: '€',
        CH: 'Fr.',
        LU: '€',
        HK: 'HK$',
        SG: 'S$',
        MX: 'Mex$',
        JP: '¥',
      };
      const result = currencyMap[project[0].dataValues.location];
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
