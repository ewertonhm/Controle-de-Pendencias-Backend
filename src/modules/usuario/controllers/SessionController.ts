import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';

export default class SessionController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email, senha } = request.body;

        const createSession = new CreateSessionService();

        const usuario = await createSession.execute({
            email,
            senha,
        });

        return response.json(usuario);
    }
}
