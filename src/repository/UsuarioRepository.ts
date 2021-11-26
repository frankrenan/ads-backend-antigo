import { EntityRepository, Repository } from "typeorm";
import { Usuario } from "../database/entities/Usuario";


@EntityRepository(Usuario)
class UsuarioRepository extends Repository<Usuario> { }

export { UsuarioRepository }