const admins = require('../../models/admins'); 
const jwt = require('jsonwebtoken');



const getAdminsHandler = async (req, reply) => {
  const client = req.fastify.db.client
  try {
    const {rows} = await client.query('SELECT * FROM admins')

    reply.send(rows)
  } catch (error) {
    throw new Error(error)
  }
};

const registerAdminHandler = async (req, reply) => {
  const { username, email, password } = req.body;
  const client = req.fastify.db.client

  const query = {
    text: `INSERT INTO admins (username, password, email)
            VALUES($1, $2, $3) RETURNING *`,
    values: [username, password, email],
  }

  try {
    const {rows} = await client.query(query)

    console.log(rows[0]);

    reply.code(201)
    reply.send('Account created successfully');
  } catch (error) {
    throw new Error(error)
  }
};

const loginAdminHandler = async (req, reply) => {
  const { username, password } = req.body;
  const client = req.fastify.db.client

  const query = {
    text: `SELECT * FROM admins WHERE username = $1`,
    values: [username]
  }

  try {
    const {rows} = await client.query(query)
    
    if (!rows) {
      return reply.send(" This admins doesn't exist")
    }

    if (rows[0].password !== password){
      return reply.send(" Wrong Password")
    }

    // sign a token
    jwt.sign(
      { id: rows[0] },
      'my_jwt_secret',
      { expiresIn: 3 * 86400 },
      (err, token) => {
        if (err) throw err;

        reply.send({ token });
      }
    );

    await reply;
  } catch (err) {
    console.log(err);
    reply.status(500).send('Server error');
  }
};

module.exports = { getAdminsHandler, registerAdminHandler, loginAdminHandler };
