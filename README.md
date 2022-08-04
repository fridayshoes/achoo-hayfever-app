# ACHOO!-hayfever-app

A location based app that notifies you when pollen count levels reach high levels (needs rewriting).

# TECHNOLOGIES used

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Jade](https://jade-lang.com/api) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for AWS cloud database
- [Heroku](https://www.heroku.com/) to deploy the app.
- [React] (https://reactjs.org/)

# Cypress for integration testing

- To install cypress for testing: https://docs.cypress.io/guides/getting-started/opening-the-app#Adding-npm-Scripts
- To run from CLI: Add this as a script in package.json file // "cypress:open": "cypress open" //
- To run from command line use : // npm run cypress:open //
- To test from the command line use: // npm run test:integration //

# Jest for unit testing

- To test from the command line use: // npm run test:unit //

# Unit and Integration testing together

- To test from the command line use: // npm run test:all //

# Nodemon for automatic reloading of the host server

- To add nodemon to package.json file as dependencies: // npm install --save-dev nodemon //
- Add to scripts in package.json file: // "start": "nodemon ./bin/www", //
- To run nodemon: // npm start //

## Getting Started

The application uses the ambee API (https://www.getambee.com/api-documentation). The API key has a 30-day expiry (last activated on 02/08/2022). API key may need to be updated if outside the 30 day limit from the date shown in this README.

### Installation

The application has been built on Express.js. To install clone the repo and then run the command below:

```
npm install
```

### Running the program
