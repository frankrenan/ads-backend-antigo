import { EntityRepository, Repository } from "typeorm";
import { Perfil } from "../database/entities/Perfil";


@EntityRepository(Perfil)
class PerfilRepository extends Repository<Perfil>{ }

export { PerfilRepository }