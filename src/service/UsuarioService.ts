import { getCustomRepository } from "typeorm";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IUsuarioRequest {
  cpf: string;
  senha: string;
  administrador?: boolean;
  nome: string;
  email: string;
  ativo: boolean;
  matricula: string;
}

class UsuarioService {

  async create({ cpf, senha, administrador = false, nome, email, ativo = true, matricula }: IUsuarioRequest) {

    const usuarioRepository = getCustomRepository(UsuarioRepository);

    if (await usuarioRepository.findOne({ cpf })) throw new Error('Este CPF já existe na base de dados!');
    if (await usuarioRepository.findOne({ matricula })) throw new Error('Esta matricula já existe na base de dados!');

    const hashSenha = await hash(senha, 8);

    const usuario = usuarioRepository.create({ cpf, senha: hashSenha, administrador, nome, email, ativo, matricula });

    await usuarioRepository.save(usuario);

    return usuario;
  }

  async list() {
    const usuarioRepository = getCustomRepository(UsuarioRepository);

    return await usuarioRepository.find();
  }

  async authenticate(cpf, senha) {

    const usuarioRepository = getCustomRepository(UsuarioRepository);

    const usuario = await usuarioRepository.findOne({ cpf });

    if (!usuario) throw new Error('Usuário não existe!');
    if (!await compare(senha, usuario.senha)) throw new Error('CPF ou senha incorreto!');

    const token = sign({ id: usuario.id }, process.env.API_SECRET_KEY, {
      subject: usuario.cpf,
      expiresIn: 28800
    })

    return Object.assign({ usuario, token: token });
  }

}

export { UsuarioService }