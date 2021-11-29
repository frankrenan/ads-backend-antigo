import { EntityRepository, Repository } from "typeorm";
import { Permissoes } from "../database/entities/Permissoes";


@EntityRepository(Permissoes)
class PermissoesRepository extends Repository<Permissoes>{ }

export { PermissoesRepository }