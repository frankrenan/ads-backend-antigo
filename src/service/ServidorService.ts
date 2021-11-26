import { getCustomRepository } from "typeorm";
import { ServidorRepository } from "../repository/ServidorRepository";


interface IServidorRequest {
  id_perfil: string;
  id_conta: string;
  cpf_conta: string;
  nome: string;
  matricula: string;
}

class ServidorService {

  async create({ id_perfil, id_conta, cpf_conta, nome, matricula }: IServidorRequest) {

    const servidorRepository = getCustomRepository(ServidorRepository);

    if (await servidorRepository.findOne({ cpf_conta })) throw new Error('Este CPF já existe na base de dados!');
    if (await servidorRepository.findOne({ matricula })) throw new Error('Esta matricula já existe na base de dados!');

    const servidor = servidorRepository.create({ id_perfil, id_conta, cpf_conta, nome, matricula });

    await servidorRepository.save(servidor);

    return servidor;
  }

  async list() {
    const servidorRepository = getCustomRepository(ServidorRepository);

    return await servidorRepository.find();
  }

}

export { ServidorService }