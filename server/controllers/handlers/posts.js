const getPostsHandler = async (req, reply) => {
  const client = req.fastify.db.client

  try {
    const {rows} = await client.query(`SELECT * FROM posts`)

    if(!rows) {
      reply.send("No Post")
    }

    reply.send(rows)
  } catch (error) {
    throw new Error(error)
  }
};

const getPostHandler = async (req, reply) => {

  const client = req.fastify.db.client
  const { id } = req.params;

  const query = {
    text: `SELECT * FROM posts WHERE id = $1`,
    values: [id]
  }

  try {
    const {rows} = await client.query(query)

    if (!rows) {
      {
        reply.code(404)
        return reply.send("Post Not Found")
      }
    }

    reply.send(rows[0])
  } catch (error) {
    throw new Error(error)
  }
};

const addPostHandler = async (req, reply) => {
  const { title, body } = req.body;
  const client = req.fastify.db.client

  const query = {
    tett: `INSERT INTO posts(title, body)
    VALUES ($1, $2)`,
    values: [title, body]
  }

  try {
    const {rows} = await client.query(query)

    console.log(rows[0]);

    reply.code(201)
    reply.send("Suscess")
  } catch (error) {
    throw new Error(error)
  }
};

const updatePostHandler = async (req, reply) => {
  const { title, body } = req.body;
  const { id } = req.params;
  const client = req.fastify.db.client

  const query = {
    text: `UPDATE posts
          SET title = '$2'
              body = '$3'
          WHERE id = &1
          RETURNING *`,
    values: [id, title, body]
  }

  try {
    const {rows} = await client.query(query)

    console.log(rows[0])
    reply.send("Update Sucessfully")
  } catch (error) {
    throw new Error(error)
  }
};

const deletePostHandler = async (req, reply) => {
  const { id } = req.params;
  const client = req.fastify.db.client

  const query = {
    text: `DELETE FROM posts WHERE id = $1`, 
    values: [id]
  }

  try {
    const {rows} = await client.query(query)

    console.log(rows);

    reply.send("Done!")
  } catch (error) {
    throw new Error(error)
  }
};

module.exports = {
  getPostsHandler,
  getPostHandler,
  addPostHandler,
  updatePostHandler,
  deletePostHandler,
};
