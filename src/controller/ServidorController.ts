import { Request, Response } from "express";
import { ServidorService } from "../service/ServidorService";

class ServidorController {

  async post(request: Request, response: Response) {

    const { id_perfil, id_conta, cpf_conta, nome, matricula } = request.body;

    const servidorService = new ServidorService();

    const servidor = await servidorService.create({ id_perfil, id_conta, cpf_conta, nome, matricula });

    return response.status(200).send({ mensagem: "Servidor criado com sucesso!", servidor })
  }

  async get(request: Request, response: Response) {
    const servidorService = new ServidorService();

    return response.status(200).send(await servidorService.list());
  }

}

export { ServidorController }