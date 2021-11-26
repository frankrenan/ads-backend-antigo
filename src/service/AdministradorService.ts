import { getCustomRepository } from "typeorm"
import { AdministradorRepository } from "../repository/AdministradorRepository"


interface IAdministradorRequest {
  id_perfil: string;
  id_conta: string;
  cpf_conta: string;
}

class AdministradorService {

  async create({ id_perfil, id_conta, cpf_conta }: IAdministradorRequest) {

    const administradorRepository = getCustomRepository(AdministradorRepository);

    if (await administradorRepository.findOne({ cpf_conta })) throw new Error('CPF já cadastrado na base de dados!');

    const admin = administradorRepository.create({ id_perfil, id_conta, cpf_conta });

    await administradorRepository.save(admin);

    return admin;
  }

  async list() {

    const administradorRepository = getCustomRepository(AdministradorRepository);

    return await administradorRepository.find();
  }

}

export { AdministradorService }

