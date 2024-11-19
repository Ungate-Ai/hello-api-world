import fastify from 'fastify';
import { readConfig } from './configReader';

const app = fastify({ logger: true });

// Route: Display the ConfigMap JSON content
app.get('/display', async (req, reply) => {
  const config = await readConfig();
  if (config.error) {
    reply.status(500).send({ error: 'Failed to load configuration' });
  } else {
    reply.type('application/json').send(config);
  }
});

// Route: Health check endpoint
app.get('/check', async (req, reply) => {
  reply.send({ status: 'reachable' });
});

// Start the Fastify server
app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server running at ${address}`);
});
