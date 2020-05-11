require("dotenv").config();
// ref: https://github.com/zeit/next.js/blob/canary/examples/with-dotenv/next.config.js

module.exports = {
  env: {
    AIRTABLE_KEY: process.env.NEXT_AIRTABLE_KEY,
  },
};
