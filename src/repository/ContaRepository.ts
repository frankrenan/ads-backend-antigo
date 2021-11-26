import { EntityRepository, Repository } from "typeorm";
import { Conta } from "../database/entities/Conta";


@EntityRepository(Conta)
class ContaRepository extends Repository<Conta>{ }

export { ContaRepository }