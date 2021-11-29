import { Request, Response } from "express";
import { PermissoesService } from "../service/PermissoesService";

class PermissoesController {

  async post(request: Request, response: Response) {

    const { desc_permissao } = request.body;

    const permissoesService = new PermissoesService();

    const permissoes = await permissoesService.create(desc_permissao);

    return response.status(200).send({ mensagem: "Permissoes cadastrado com sucesso", permissoes })
  }

  async get(request: Request, response: Response) {

    const permissoesService = new PermissoesService();

    return response.status(200).send(await permissoesService.list());
  }

}

export { PermissoesController }