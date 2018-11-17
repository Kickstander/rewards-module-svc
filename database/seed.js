const faker = require('faker');
const fs = require('fs');

const seedRewards = () => {
  let tiers;
  let instance;

  const options = { flags: 'a' };
  const csvStream = fs.createWriteStream('reward.csv', options);
  // const jsonStream = fs.createWriteStream('reward.json', options);
  // csvStream.write(reward);

  for (let i = 1; i < 500001; i += 1) {
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

      instance = {
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
      };

      row = `${Object.values(instance).join(',')}\n`;
      //reward = `${JSON.stringify(instance)},`;
      csvStream.write(row);
      //jsonStream.write(reward);
    }
  }
  csvStream.end();
  //jsonStream.end();
};

const seedProjects = () => {
  const options = { flags: 'a' };
  const csvStream = fs.createWriteStream('project.csv', options);
  // const jsonStream = fs.createWriteStream('project.json', options);
  const countries = ['CA', 'UK', 'US', 'AU', 'NZ', 'NL', 'DK', 'IE', 'NO', 'SE', 'DE',
    'FR', 'ES', 'IT', 'AT', 'BE', 'CH', 'LU', 'HK', 'SG', 'MS', 'JP'];
  for (let i = 1; i < 500001; i += 1) {
    const randIdx = Math.floor(Math.random() * countries.length);

    if (i % 5 === 0) {
      csvStream.write(`${i},${countries[randIdx]}\n`);
      //jsonStream.write(`${JSON.stringify({ projectId: i, location: countries[randIdx] })},`);
    } else {
      csvStream.write(`${i},US\n`);
      //jsonStream.write(`${JSON.stringify({ projectId: i, location: 'US' })},`);
    }
  }
};

// seedRewards();
seedProjects();

//fs.writeFile('project.csv', projectHeader, (err) => {
  //if (err) throw err;
  //console.log('project.csv written');
//});

//fs.writeFile('project.json', '', (err) => {
  //if (err) throw err;
  //console.log('project.json written');
//});
