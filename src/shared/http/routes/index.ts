import { Router } from 'express';
import usuarioRouter from '@modules/usuario/routes/usuario.routes';
import sessionRouter from '@modules/usuario/routes/session.routes';
import tipoPendenciaRouter from '@modules/tipo_pendencia/routes/tipoPendencia.routes';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const routes = Router();

routes.use('/usuario', isAuthenticated, usuarioRouter);
routes.use('/tipo', isAuthenticated, tipoPendenciaRouter);
routes.use('/session', sessionRouter);

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

export default routes;
