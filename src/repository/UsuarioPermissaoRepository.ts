import { EntityRepository, Repository } from "typeorm";
import { UsuarioPermissao } from "../database/entities/UsuarioPermissao";


@EntityRepository(UsuarioPermissao)
class UsuarioPermissaoRepository extends Repository<UsuarioPermissao> { }

export { UsuarioPermissaoRepository }