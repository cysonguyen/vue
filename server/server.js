const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 3000;


fastify.register(require('.//database/db'))
fastify.register(require('./routes/posts'));
fastify.register(require('./routes/admins'));


fastify.decorateRequest('fastify', null)    
fastify.addHook("onRequest", async (req) => {
        req.fastify = fastify;
});

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
