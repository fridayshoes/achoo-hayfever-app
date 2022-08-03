# ACHOO!-hayfever-app



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

# Cypress for testing
- To install cypress for testing: https://docs.cypress.io/guides/getting-started/opening-the-app#Adding-npm-Scripts 
- To run from CLI: Add this as a script in package.json file //  "cypress:open": "cypress open" //
- To run from command line use : // npm run cypress:open //


# Nodemon for automatic reloading of the host server
- To add nodemon to package.json file as dependencies: // npm install --save-dev nodemon   //
- Add to scripts in package.json file: // "start": "nodemon ./bin/www", //
- To run nodemon: // npm start //