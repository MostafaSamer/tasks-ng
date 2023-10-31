const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Replace 'db.json' with your JSON data file

const angularAppPath = path.join(__dirname, 'dist', 'your-angular-app-name'); // Replace with the correct path to your Angular app

const port = process.env.PORT || 3000;

app.use(express.static(angularAppPath));

app.use('/api', router); // Prefix all API routes with '/api'

app.get('/*', (req, res) => {
  res.sendFile(path.join(angularAppPath, 'index.html'));
});

server.use(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
