const express = require('express');
const app = express();
const port = 3000;

const Routes = require('./routes');

app.use(express.json());
app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);



app.listen(port, () => {
  console.log(`Aplicación de ejemplo en el puerto: ${port}`);
});