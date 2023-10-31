const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Replace 'db.json' with the name of your JSON data file
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000; // Define the port where the server will run

server.use(middlewares);
server.use('/api', router); // Prefix all API routes with '/api'

server.listen(port, () => {
  console.log(`JSON-Server is running on port ${port}`);
});
