const fastifyPlugin = require('fastify-plugin')
const {Client} = require('pg')

const client = new Client({
    user: 'postgres', 
    password:'123456', 
    host: 'localhost', 
    port: 5432, 
    database: 'lop_hoc' 
})

async function dbconnector(fastify, options) { 
    try { 
        await client.connect() 
        console.log("db connected succesfully") 
        fastify.decorate('db', {client}) 

    } catch(err) { 
        console.error(err) 
    } 
} 

module.exports = fastifyPlugin(dbconnector)
