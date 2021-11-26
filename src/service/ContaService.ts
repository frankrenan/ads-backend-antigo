import { getCustomRepository } from "typeorm";
import { ContaRepository } from "../repository/ContaRepository";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IContaRequest {
  cpf: string;
  senha: string;
}

class ContaService {

  async create({ cpf, senha }: IContaRequest) {

    const contaRepository = getCustomRepository(ContaRepository);

    if (await contaRepository.findOne({ cpf })) throw new Error('Este CPF já existe na base de dados!');

    const senhaHash = await hash(senha, 8);
    const conta = contaRepository.create({ cpf, senha: senhaHash });
    await contaRepository.save(conta);

    return conta;
  }

  async list() {
    const contaRepository = getCustomRepository(ContaRepository);

    return await contaRepository.find();
  }

  async authenticate({ cpf, senha }: IContaRequest) {

    const contaRepository = getCustomRepository(ContaRepository);

    const usuario = await contaRepository.findOne({ cpf });

    if (!usuario) throw new Error('Usuário não existe!');
    if (!await compare(senha, usuario.senha)) throw new Error('CPF ou senha incorreto!');

    const token = sign({ id: usuario.id }, process.env.API_SECRET_KEY, {
      subject: usuario.cpf,
      expiresIn: 28800
    })

    return Object.assign({usuario, token: token});
  }

}

export { ContaService }