if (process.env.GOOGLE_CLIENT_ID) {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
