const express = require('express');
const redis = require('redis');
const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
  console.error('Error loading .env file:', result.error);
}

console.log('Environment variables loaded:', process.env);

const app = express();
const port = process.env.PORT || 3000;

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD || 'password',
  tls: {}, // Use TLS if your Redis is configured for encryption
});

// Redis connection event handlers
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Check if Redis client is ready
redisClient.on('ready', () => {
  console.log('Redis client is ready');
});

// Endpoint to check Redis connection status
app.get('/', (req, res) => {
  res.send(`Redis client connected: ${redisClient.connected}`);
});

// Start the server and listen on the specified port
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);

  if (redisClient.connect) {
    console.log('Redis client is connected when server starts listening');
  } else {
    console.log('Redis client is NOT connected when server starts listening');
  }
});

process.on('SIGINT', () => {
  redisClient.quit();
  server.close();
  console.log('Server and Redis client gracefully terminated');
});
