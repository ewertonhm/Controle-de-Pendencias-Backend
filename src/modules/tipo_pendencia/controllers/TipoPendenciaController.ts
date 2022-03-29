import { Request, Response } from 'express';
import CreateTipoPendenciaService from '../services/CreateTipoPendenciaService';
import DeleteTipoPendenciaService from '../services/DeleteTipoPendenciaService';
import ListTipoPendenciaService from '../services/ListTipoPendenciaService';
import ShowTipoPendenciaService from '../services/ShowTipoPendenciaService';
import UpdateTipoPendenciaService from '../services/UpdateTipoPendenciaService';

export default class TipoPendenciaController {
    public async index(request: Request, response: Response) {
        const listTipoPendencias = new ListTipoPendenciaService();

        const tipoPendencias = await listTipoPendencias.execute();

        return response.json(tipoPendencias);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showTipoPendencia = new ShowTipoPendenciaService();

        const tipoPendencia = await showTipoPendencia.execute({ id });

        return response.json(tipoPendencia);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { tipo, severidade } = request.body;

        const createTipoPendencia = new CreateTipoPendenciaService();

        const tipoPendencia = await createTipoPendencia.execute({
            tipo,
            severidade,
        });

        return response.json(tipoPendencia);
    }
    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { tipo, severidade } = request.body;
        const { id } = request.params;

        const updateTipoPendencia = new UpdateTipoPendenciaService();

        const tipoPendencia = await updateTipoPendencia.execute({
            id,
            tipo,
            severidade,
        });

        return response.json(tipoPendencia);
    }
    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const deleteTipoPendencia = new DeleteTipoPendenciaService();

        await deleteTipoPendencia.execute({
            id,
        });

        return response.json([]);
    }
}
