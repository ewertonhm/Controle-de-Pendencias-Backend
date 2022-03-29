import { Router } from 'express';
import usuarioRouter from '@modules/usuario/routes/usuario.routes';

const routes = Router();

routes.use('/usuario', usuarioRouter);

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

export default routes;
