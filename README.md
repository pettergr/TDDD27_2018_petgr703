# TDDD27 - 2018 - Order management

#### Petter Granli - petgr703

A project for the course TDDD27

## Functional specification
The goal was to create a web application for managing sales orders. The application includes a database with products, customers and sales orders which are managed with a web interface. Following are features that are implemented:

### Application functions
- Create, remove and update sales orders, customers and products.
- Set status of orders to active, shipped and paid.
- Login functionality with saved password hashes and json web token.

## Technological specification

The application use javascript for both front- and back-end and use a NoSQL database. The application is deployed to a PaaS platform. Following are the techniques used:

### Front-end
- [React](https://reactjs.org) the front-end library.
    * [React Router](https://github.com/ReactTraining/react-router) for front-end routing.
    * [Create React App](https://github.com/facebook/create-react-app) as boilerplate for the front-end application.
- [Redux](https://redux.js.org) Data state library.
    * [Redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware) for making asynchronous requests to the back-end using axios in redux actions.
    * [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) to connect the app to the DevTools app in Chrome.
    * [Redux Form](https://redux-form.com/7.3.0/) For utilizing the state for the forms.
- [Semantic UI React](https://react.semantic-ui.com/introduction) For styling.
   * [react-semantic-redux-form](https://github.com/ckshekhar/react-semantic-redux-form) For styling the forms.

### Back-end
- [Node.js](https://nodejs.org) For running server-side javascript.
- [Express](https://expressjs.com) Web framework for node.
- [MongoDB](https://www.mongodb.com) NoSQL database for storing all data.
    * [Mongoose](http://mongoosejs.com/) Object modelling for mongodb.
    * [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js) for storing password hashes

### Deployment
- [Heroku](https://www.heroku.com) for continous deployment to their PaaS.
- [dotenv](https://github.com/motdotla/dotenv) for loading environmental variables from a non version managed file while running the app locally.

## Screencast
The screencast is uploaded to Google Drive and can be found [here](https://drive.google.com/file/d/1zSJ4YisqbGoRjO-F-hmGCElM214iE52B/view?usp=sharing).
