const {
  getAdminsSchema,
  registerAdminSchema,
  loginAdminSchema,
  test,
} = require('../controllers/schemas/admins');

const {
  getAdminsHandler,
  registerAdminHandler,
  loginAdminHandler,
} = require('../controllers/handlers/admins');

const getAdminsOpts = {
  schema: getAdminsSchema,
  handler: getAdminsHandler,
};

const registerAdminOpts = {
  schema: registerAdminSchema,
  handler: registerAdminHandler,
};

const loginAdminOpts = {
  schema: loginAdminSchema,
  handler: loginAdminHandler,
};

const adminRoutes = (fastify, options, done) => {
  // get all admins
  //const client = fastify.db.client

  fastify.get('/api/admins', getAdminsOpts);

  // register an admin
  fastify.post('/api/admins/new', registerAdminOpts);

  // login an admin
  fastify.post('/api/admins/login', loginAdminOpts);
  

  fastify.get('/api/admins/all', async function (req, reply) {

    //var rows = client.query('SELECT id FROM player')

    await client.query('SELECT * FROM player', (err, res) => {
      if (err) {
        console.log(err)
        throw err
      }

      const{rows} = res
      console.log(res);


      reply.send(rows)
    })
  })

  done();
};

module.exports = adminRoutes;
