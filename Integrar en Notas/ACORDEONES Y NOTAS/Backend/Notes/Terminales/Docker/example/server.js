const express = require('express');

const server = express();

server.use('/', (req, res) => {
  res.status(200).send({ message: 'Hello World' })
})

server.listen(3000, () => {
  console.info('Server listening on port 3000')
})