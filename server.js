var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    komoto: "stolen"
  }
});
server.start();
