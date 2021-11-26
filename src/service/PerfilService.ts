import { getCustomRepository } from "typeorm"
import { PerfilRepository } from "../repository/PerfilRepository"


class PerfilService {

  async create(tipo_perfil: string) {

    const perfilRepository = getCustomRepository(PerfilRepository);

    if (await perfilRepository.findOne( {tipo_perfil} )) throw new Error('Perfil já cadastrado!');

    const perfil = perfilRepository.create({ tipo_perfil });
    await perfilRepository.save(perfil);

    return perfil;
  }

  async list() {
    const perfilRepository = getCustomRepository(PerfilRepository);

    return await perfilRepository.find();
  }

}

export { PerfilService }