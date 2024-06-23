const express = require('express');
const Redis = require('ioredis');

const app = express();
const port = 3000;

const redisHost = process.env.REDIS_HOST || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;

const client = new Redis({
  host: redisHost,
  port: redisPort,
  retryStrategy: (times) => {
    return Math.min(times * 50, 2000);
  },
  tls: {}
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

app.get('/', async (req, res) => {
  try {
    console.log('Getting value from Redis...');
    const reply = await client.get('key');

    if (!reply) {
      console.log('Value not found in Redis, setting value...');
      await client.set('key', 'value');
      res.send('Set value to Redis');
    } else {
      console.log('Value found in Redis: ', reply);
      res.send('Value from Redis: ' + reply);
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error connecting to Redis or performing operation');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
