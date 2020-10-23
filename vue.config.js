// vue.config.js

require('dotenv').config();

const { NODE_ENV, BASE_PATH } = process.env;

module.exports = {
  lintOnSave: false,

  publicPath: (NODE_ENV === 'production' && BASE_PATH) || '/',
};
