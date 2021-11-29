import { Request, Response } from "express";
import { UsuarioPermissaoService } from "../service/UsuarioPermissaoService";


class UsuarioPermissaoController {

  async post (request: Request, response: Response){

    const {id_usuario, id_permissao} = request.body;

    const usuarioPermissaoService = new UsuarioPermissaoService();

    const usuarioPermissao = await usuarioPermissaoService.create({id_usuario, id_permissao});

    return response.json(usuarioPermissao);
  }

  async get(request: Request, response: Response){

    const usuarioPermissaoService = new UsuarioPermissaoService();

    const usuarioPermissao = await usuarioPermissaoService.list();

    return response.json(usuarioPermissao);
  }


}

export { UsuarioPermissaoController }