import express from 'express';
import routerProducts from './router/products.js';

import config from './config.js';
import DBMongoDB from './model/DBMongoDB.js';

const app = express();

app.use(express.static('public', { extensions: ['html', 'htm'] }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products', routerProducts);

// Ruta para el index.html en la raíz
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Configuración del puerto y lanzamiento del servidor
const PORT = config.PORT;
const server = app.listen(PORT, () => 
    console.log(`Servidor Express escuchando en el puerto ${PORT}.`)
);
server.on('error', error => 
    console.log('Error al iniciar el servidor Express: ' + error.message)
);