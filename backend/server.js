const express = require('express');
const server = express();
const port = 3000;

const Routes = require('./routes');
// host => localhost:3000/clients
server.use('/api/v1/clients', Routes.ClientRoutes);
server.use('/api/v1/product', Routes.ProductRoutes);
server.use('/api/v1/sales', Routes.SaleRoutes);

server.listen(port, () => {
  console.log(`API escuchando en puerto: ${port}`);
});