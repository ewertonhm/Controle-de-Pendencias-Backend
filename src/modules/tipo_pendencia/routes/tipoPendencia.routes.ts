import { Router } from 'express';
import TipoPendenciaController from '../controllers/TipoPendenciaController';
import { celebrate, Joi, Segments } from 'celebrate';

const tipoPendenciaRouter = Router();
const tipoPendenciaController = new TipoPendenciaController();

tipoPendenciaRouter.get('/', tipoPendenciaController.index);
tipoPendenciaRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    tipoPendenciaController.show,
);
tipoPendenciaRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            tipo: Joi.string().required(),
            severidade: Joi.number().required(),
        },
    }),
    tipoPendenciaController.create,
);
tipoPendenciaRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            tipo: Joi.string().required(),
            severidade: Joi.number().required(),
        },
    }),
    tipoPendenciaController.update,
);
tipoPendenciaRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    tipoPendenciaController.delete,
);

export default tipoPendenciaRouter;
