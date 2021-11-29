import { Request, Response } from "express";
import { UsuarioService } from "../service/UsuarioService";

class UsuarioController {

  async post(request: Request, response: Response) {

    const { cpf, senha, administrador, nome, email, ativo, matricula } = request.body;

    const usuarioService = new UsuarioService();

    const Usuario = await usuarioService.create({ cpf, senha, administrador, nome, email, ativo, matricula });

    return response.status(200).send({ mensagem: "Usuario criado com sucesso!", Usuario })
  }

  async get(request: Request, response: Response) {
    const usuarioService = new UsuarioService();

    return response.status(200).send(await usuarioService.list());
  }

  async authenticate(request: Request, response: Response) {

    const { cpf, senha } = request.body;

    const usuarioPermissaoService = new UsuarioService();

    const usuarioAutenticado = await usuarioPermissaoService.authenticate(cpf, senha);

    return response.status(200).json(usuarioAutenticado);
  }

}

export { UsuarioController }