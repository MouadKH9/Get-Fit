//if (process.env.GOOGLE_CLIENT_ID) {
if (false) {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
