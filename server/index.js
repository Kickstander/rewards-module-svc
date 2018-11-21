const express = require('express');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const port = 3004;
const host = '0.0.0.0';

app.use(compression());
app.use(cors());
app.use(express.json());
app.use('/:projectId', express.static('public'));

app.get('/api/:projectId/rewards', (req, res) => {
  const { projectId } = req.params;
  const query = `SELECT * FROM reward WHERE projectid = ${projectId}`;
  db.query(query)
    .then((rewards) => {
      res.send(rewards.rows);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/api/:projectId/rewards', (req, res) => {
  const { projectId, pledgeAmount, name, description, item1, item2, item3, isLimited, limitCount, estDeliv, shipsTo, backers } = req.body;
  const query = `
    INSERT INTO reward(projectid, pledgeamount, name, description, item1, item2, item3, islimited, limitcount, estdeliv, shipsto, backers)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  `;
  const values = [projectId, pledgeAmount, name, description, item1, item2, item3, isLimited, limitCount, estDeliv, shipsTo, backers];
  db.query(query, values)
    .then(() => {
      res.send('created a new reward');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/api/:projectId/rewards/:rewardId', (req, res) => {
  const { rewardId } = req.params;
  const { projectId, pledgeAmount, name, description, item1, item2, item3, isLimited, limitCount, estDeliv, shipsTo, backers } = req.body;
  const query = `
    UPDATE reward
    SET projectid = $1, 
        pledgeamount = $2, 
        name = $3, 
        description = $4, 
        item1 = $5, 
        item2 = $6, 
        item3 = $7, 
        islimited = $8, 
        limitcount = $9, 
        estdeliv = $10, 
        shipsto = $11, 
        backers = $12
    WHERE id = ${rewardId}
  `;
  const values = [projectId, pledgeAmount, name, description, item1, item2, item3, isLimited, limitCount, estDeliv, shipsTo, backers];
  db.query(query, values)
    .then(() => {
      res.send('updated');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete('/api/:projectId/rewards/:rewardId', (req, res) => {
  const { rewardId } = req.params;
  const query = `
    DELETE FROM reward
    WHERE id = ${rewardId}
  `;
  db.query(query)
    .then(() => {
      res.send('deleted');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/api/:projectId/currency', (req, res) => {
  const { projectId } = req.params;
  const query = `SELECT * FROM project WHERE projectid = ${projectId}`;
  db.query(query)
    .then((project) => {
      res.send(project.rows[0]);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, host);
console.log(`Server is listening at port ${port}`);
