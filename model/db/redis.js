const Config = require('../../config');
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

let client = redis.createClient({
  host: Config.redis.host,
  port: Config.redis.port,
  db: Config.redis.database
});
module.exports = client;