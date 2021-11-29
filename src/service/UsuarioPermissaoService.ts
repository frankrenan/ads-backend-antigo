import { getCustomRepository } from "typeorm"
import { UsuarioPermissaoRepository } from "../repository/UsuarioPermissaoRepository";


interface IUsuarioPermissaoRequest {
  id_usuario: string;
  id_permissao: string;
}

class UsuarioPermissaoService {

  async create({id_usuario, id_permissao}: IUsuarioPermissaoRequest){

    const usuarioPermissaoRepository = getCustomRepository(UsuarioPermissaoRepository);

    if (await usuarioPermissaoRepository.findOne({id_usuario, id_permissao})) throw new Error('Usuário já possui esta permissão!');

    const usuarioPermissao = usuarioPermissaoRepository.create({id_usuario, id_permissao});

    await usuarioPermissaoRepository.save(usuarioPermissao);

    return usuarioPermissao;
  }

  async list(){
    const usuarioPermissaoRepository = getCustomRepository(UsuarioPermissaoRepository);

    return await usuarioPermissaoRepository.find();
  }

}

export { UsuarioPermissaoService }