const server = require("./app")

const PORT = 8080;


if (require.main === module) {
  server.listen(() => console.log(`listening on port ${PORT}`));
}

module.exports = server;
