const faker = require('faker');
const db = require('./index.js');
const Promise = require('bluebird');

const seedRewards = () => {
  const rewards = [];
  let tiers;
  for (let i = 1; i < 101; i++) {

    //arbitrary trap to semi-randomize reward tier levels for different projects
    if (i % 8 === 0) {
      tiers = [1, 5, 10, 25, 50];
    } else if (i % 12 === 0) {
      tiers = [1, 5, 10, 25, 50, 100];
    } else if (i % 10 === 0) {
      tiers = [1, 5, 10, 25, 50, 75, 100, 250, 500, 750];
    } else {
      tiers = [1, 5, 10, 25, 50, 75, 100];
    }

    for (let j = 0; j < tiers.length; j++) {
      let isLimited = false;
      let limitCount = null;
      let estDeliv = faker.date.month() + ' ' + faker.random.number({min: 2019, max: 2022});
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
        isLimited: isLimited,
        limitCount: limitCount,
        estDeliv: estDeliv,
        shipsTo: faker.lorem.words(),
        backers: backers
      });
    }
  }

  let rewardPromises = rewards.map((reward) => {
    return db.Reward.create(reward)
      .catch((err) => {
        return Promise.resolve();
      });
  });

  return Promise.all(rewardPromises);

};

const seedProjects = () => {
  const projects = [];
  for (let i = 0; i < 100; i++) {
    projects.push({
      location: faker.address.country()
    });
  }

  let projectPromises = projects.map((project) => {
    return db.Project.create(project)
      .catch((err) => {
        return Promise.resolve();
      });
  });

  return Promise.all(projectPromises);
};

seedRewards();
seedProjects();
