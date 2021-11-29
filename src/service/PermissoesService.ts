import { getCustomRepository } from "typeorm"
import { PermissoesRepository } from "../repository/PermissoesRepository"

interface IPermissoesRequest {
  desc_permissao: string;
}

class PermissoesService {

  async create({ desc_permissao }: IPermissoesRequest) {

    const permissoesRepository = getCustomRepository(PermissoesRepository);

    if (await permissoesRepository.findOne({desc_permissao})) throw new Error('Permissoes já cadastrado!');

    const permissoes = permissoesRepository.create({ desc_permissao });
    await permissoesRepository.save(permissoes);

    return permissoes;
  }

  async list() {
    const permissoesRepository = getCustomRepository(PermissoesRepository);

    return await permissoesRepository.find();
  }

}

export { PermissoesService }