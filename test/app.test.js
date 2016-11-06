const bodyParser = require('body-parser');
const express = require('express');
const routes = require('../index.js');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/' + routes.name, routes.paths);

app.listen(8080, () => {
  // console.log(`server started and listening on port: ${8080}`);
  // console.dir(routes);
});

module.exports = app;