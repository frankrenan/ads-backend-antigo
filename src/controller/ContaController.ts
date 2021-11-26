import { Request, Response } from "express";
import { ContaService } from "../service/ContaService";
import { compare } from "bcryptjs";

class ContaController {

  async post(request: Request, response: Response) {

    const { cpf, senha } = request.body;

    const contaService = new ContaService();

    const conta = await contaService.create({ cpf, senha });

    return response.status(200).send({ mensagem: "Conta criada com sucesso!", conta });
  }

  async get(request: Request, response: Response) {

    const contaService = new ContaService();

    return response.status(200).send(await contaService.list());

  }

  async authenticate(request: Request, response: Response) {
    const { cpf, senha } = request.body;

    const contaService = new ContaService();

    const usuario = await contaService.authenticate({ cpf, senha });

    return response.status(200).json(usuario);

  }
}

export { ContaController }