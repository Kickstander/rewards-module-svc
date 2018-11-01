const faker = require('faker');
const Promise = require('bluebird');
const db = require('./index.js');

const seedRewards = () => {
  const rewards = [];
  let tiers;
  for (let i = 1; i < 101; i += 1) {
    // arbitrary trap to semi-randomize reward tier levels for different projects
    if (i % 8 === 0) {
      tiers = [1, 5, 10, 25, 50];
    } else if (i % 12 === 0) {
      tiers = [1, 5, 10, 25, 50, 100];
    } else if (i % 10 === 0) {
      tiers = [1, 5, 10, 25, 50, 75, 100, 250, 500, 750];
    } else {
      tiers = [1, 5, 10, 25, 50, 75, 100];
    }

    for (let j = 0; j < tiers.length; j += 1) {
      let isLimited = false;
      let limitCount = null;
      const estDeliv = `${faker.date.month()} ${faker.random.number({ min: 2019, max: 2022 })}`;
      let backers = faker.random.number(500);

      if (j === 8) {
        isLimited = true;
        limitCount = 30;
        backers = faker.random.number(30);
      }
      if (j === 9) {
        isLimited = true;
        limitCount = 10;
        backers = faker.random.number(10);
      }

      rewards.push({
        projectId: i,
        pledgeAmount: tiers[j],
        name: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        item1: faker.lorem.words(),
        item2: faker.lorem.words(),
        item3: faker.lorem.words(),
        isLimited,
        limitCount,
        estDeliv,
        shipsTo: faker.lorem.words(),
        backers,
      });
    }
  }

  const rewardPromises = rewards.map(reward => (
    db.Reward.create(reward)
      .catch((err) => {
        console.log(err);
      })
  ));

  return Promise.all(rewardPromises);
};

const seedProjects = () => {
  const projects = [];
  for (let i = 0; i < 100; i += 1) {
    projects.push({
      location: faker.address.country(),
    });
  }

  const projectPromises = projects.map(project => (
    db.Project.create(project)
      .catch((err) => {
        console.log(err);
      })
  ));

  return Promise.all(projectPromises);
};

seedRewards();
seedProjects();
