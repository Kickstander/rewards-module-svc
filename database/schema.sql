DROP DATABASE IF EXISTS rewards;
CREATE DATABASE rewards;
\connect rewards;

DROP TABLE IF EXISTS project;
CREATE TABLE project (
  projectId INT PRIMARY KEY NOT NULL,
  location VARCHAR(5)
);

DROP TABLE IF EXISTS reward;
CREATE TABLE reward (
  id SERIAL PRIMARY KEY,
  projectId INT REFERENCES project(projectId),
  pledgeAmount SMALLINT NOT NULL,
  name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  item1 VARCHAR(50) NOT NULL,
  item2 VARCHAR(50) NOT NULL,
  item3 VARCHAR(50) NOT NULL,
  isLimited BOOLEAN NOT NULL,
  limitCount SMALLINT,
  estDeliv VARCHAR(50) NOT NULL,
  shipsTo VARCHAR(100) NOT NULL,
  backers SMALLINT NOT NULL
);

COPY project(projectId, location) FROM '/home/david/hr/SDC/seeds/project.csv' DELIMITERS ',' CSV;
COPY reward(projectId, pledgeAmount, name, description, item1, item2, item3, isLimited, limitCount, estDeliv, shipsTo, backers) FROM '/home/david/hr/SDC/seeds/reward.csv' DELIMITERS ',' CSV;
