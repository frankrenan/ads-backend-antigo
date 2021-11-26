import { Request, Response } from "express";
import { PerfilService } from "../service/PerfilService";

class PerfilController {

  async post(request: Request, response: Response) {

    const { tipo_perfil } = request.body;

    const perfilService = new PerfilService();

    const perfil = await perfilService.create(tipo_perfil);

    return response.status(200).send({ mensagem: "Perfil cadastrado com sucesso", perfil })
  }

  async get(request: Request, response: Response) {
    
    const perfilService = new PerfilService();

    return response.status(200).send(await perfilService.list());
  }

}

export { PerfilController }