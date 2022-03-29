import { Request, Response } from 'express';
import CreateUsuarioService from '../services/CreateUsuarioService';
import DeleteUsuarioService from '../services/DeleteUsuarioService';
import ListUsuarioService from '../services/ListUsuarioService';
import ShowUsuarioService from '../services/ShowUsuarioService';
import UpdateUsuarioService from '../services/UpdateUsuarioService';

export default class UsuarioController {
    public async index(request: Request, response: Response) {
        const listUsuarios = new ListUsuarioService();

        const usuarios = await listUsuarios.execute();

        return response.json(usuarios);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showUsuario = new ShowUsuarioService();

        const usuario = await showUsuario.execute({ id });

        return response.json(usuario);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            nome,
            sobrenome,
            email,
            senha,
            ativo,
            btv_usuario,
            btv_senha,
            id_bitrix,
        } = request.body;

        const createUsuario = new CreateUsuarioService();

        const usuario = await createUsuario.execute({
            nome,
            sobrenome,
            email,
            senha,
            ativo,
            btv_usuario,
            btv_senha,
            id_bitrix,
        });

        return response.json(usuario);
    }
    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            nome,
            sobrenome,
            email,
            senha,
            ativo,
            btv_usuario,
            btv_senha,
            id_bitrix,
        } = request.body;
        const { id } = request.params;

        const updateUsuario = new UpdateUsuarioService();

        const usuario = await updateUsuario.execute({
            id,
            nome,
            sobrenome,
            email,
            senha,
            ativo,
            btv_usuario,
            btv_senha,
            id_bitrix,
        });

        return response.json(usuario);
    }
    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const deleteUsuario = new DeleteUsuarioService();

        await deleteUsuario.execute({
            id,
        });

        return response.json([]);
    }
}
