const path = require('path');
const dotenv = require('dotenv');
console.log('__dirname', __dirname);
dotenv.config({ path: path.join(__dirname, `${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : '.dev'}.env`) });

const packageJson = require('../../package.json');

const { cast } = require('./cast');

const defaultValue = {
  HOST: 'localhost',
  PORT: 3000,
  FILE_PATH: '/files',

}

const config = {
  basic: {
    name: packageJson.name,
    version: packageJson.version,
    host: cast('HOST', 'string', defaultValue.HOST),
    port: cast('PORT', 'number', defaultValue.PORT),
    filePath: cast('FILE_PATH', 'string', defaultValue.FILE_PATH),
  },
  secrets: {
    secretKey: cast('SECRET_KEY', 'string', '<FIXME>'),
    /* 
    accessTokenExpiration: cast('ACCESS_TOKEN_EXPIRATION', 'string', '1d'),
    refreshTokenExpiration: cast('ACCESS_TOKEN_EXPIRATION', 'string', '60d')
    */
  },
  govApi: {
    key: cast('GOV_API_KEY', 'string'),
  }
};

module.exports = config;