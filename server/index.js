const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('../database/index.js');

const app = express();
const port = 3003;
const host = '0.0.0.0';

app.use(compression());
app.use(cors());
app.use(express.json());
app.use('/:projectId', express.static('public'));

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
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/api/:projectId/rewards', (req, res) => {
  db.Reward.create(req.body)
    .then(() => {
      res.send('created a new reward');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/api/:projectId/rewards/:rewardId', (req, res) => {
  db.Reward.update(
    req.body,
    {
      where: {
        projectId: req.params.projectId,
        id: req.params.rewardId,
      },
    },
  )
    .then(() => {
      res.send('updated');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete('/api/:projectId/rewards/:rewardId', (req, res) => {
  db.Reward.destroy(
    {
      where: {
        projectId: req.params.projectId,
        id: req.params.rewardId,
      },
    },
  )
    .then(() => {
      res.send('deleted');
    })
    .catch((err) => {
      res.send(err);
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
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, host);
console.log(`Server is listening at port ${port}`);
