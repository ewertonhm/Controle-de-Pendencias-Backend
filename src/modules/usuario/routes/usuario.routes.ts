import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const usuarioRouter = Router();
const usuarioController = new UsuarioController();

usuarioRouter.get('/', usuarioController.index);
usuarioRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    usuarioController.show,
);
usuarioRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            sobrenome: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(8).required(),
            ativo: Joi.boolean().default(true),
            btv_usuario: Joi.string().default('null'),
            btv_senha: Joi.string().default('null'),
            id_bitrix: Joi.number().default(0),
        },
    }),
    usuarioController.create,
);
usuarioRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            nome: Joi.string().required(),
            sobrenome: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(8).required(),
            ativo: Joi.boolean().default(true),
            btv_usuario: Joi.string().default('null'),
            btv_senha: Joi.string().default('null'),
            id_bitrix: Joi.number().default(0),
        },
    }),
    usuarioController.update,
);
usuarioRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    usuarioController.delete,
);

export default usuarioRouter;
