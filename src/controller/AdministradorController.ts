import { Request, Response } from "express";
import { AdministradorService } from "../service/AdministradorService";

class AdministradorController {

  async post(request: Request, response: Response) {

    const { id_perfil, id_conta, cpf_conta } = request.body;

    const administradorService = new AdministradorService();

    const admin = await administradorService.create({ id_perfil, id_conta, cpf_conta });

    return response.status(200).send({ mensagem: "Administrador cadastrado com sucesso!", admin });
  }

  async get(request: Request, response: Response) {

    const administradorService = new AdministradorService();

    return response.status(200).send(await administradorService.list());
  }

}

export { AdministradorController }