# BACKEND

1. crear la carpeta
2. entrara la carpeta
3. Inicializar el proyecto `npm init -y`
4. añadir el `.girignore` con la linea 
    ```
        node_modules/
    ```
5. Crear nuestro servidor:
    1. Instalar `express` => `npm i express`.
    2. Crear el codigo base para una API con express:
        ```
        const express = require('express');
        const server = express();
        const port = 3000;

        server.listen(port, () => {
            console.log(`API escuchando en puerto: ${port}`);
        });
        ```
    3. probar que la API este lista levantando el servidor, escribiendo en la terminal:
        `node server.js` || `nodemon server.js`
    4. Lo que sigue es crear el arbol de carpetas para mi arquitectura.
    5. empezar llenando los archivos de ruta con la estructura basica:
    ```
        const express = require('express');
        const router = express.Router();

        router.get('/',() => {});

        module.exports = router;
    ```
    6. importar en el index.js de la carpeta `routes` a todos.
    ```
        const ClientRoutes = require ('./ClientRoutes');
        const ProductRoutes = require('./ProductRoutes');
        const SaleRoutes = require('./SaleRoutes');

        module.exports = {
            ClientRoutes,
            ProductRoutes,
            SaleRoutes
        };
    ```
    7. importarlos en la app.
   ```
        const express = require('express');
        const server = express();
        const port = 3000;

        server.listen(port, () => {
            console.log(`API escuchando en puerto: ${port}`);
        });
    ```
    `Pasamos a Esto`   
    ```
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
    ```
