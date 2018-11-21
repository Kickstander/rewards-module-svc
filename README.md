# Project Name

> Rewards/reward-tier module for a crowd-funding campaign/project page

## Related Projects

  - https://github.com/FEC-Kickstand/comments-module
  - https://github.com/FEC-Kickstand/funding-widget-svc
  - https://github.com/FEC-Kickstand/updates-service
  - https://github.com/FEC-Kickstand/rewards-module-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> From within the root directory:
```sh
npm start
```

> To seed the database:

Enter appropriate user & password information into database/index.js file
```sh
npm run schema
npm run seed
```

## Endpoints
| Action    | Method | Endpoint                                                       | Purpose           |
|-----------|--------|----------------------------------------------------------------|-------------------|
| Read      | GET    | /api/:projectId/rewards                                        | Get all rewards   |
| Create    | POST   | /api/:projectId/rewards                                        | Insert new reward |
| Update    | PUT    | /api/:projectId/rewards/:rewardId                              | Update one reward |
| Delete    | DELETE | /api/:projectId/rewards/:rewardId                              | Delete an reward  |

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

